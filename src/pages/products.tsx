import * as api from "../services/api/Api";
import { getProducts } from "../services/productApi/productApi";

import * as React from "react";
import Link from "next/link";
import "isomorphic-fetch";
import Main from "../layouts/Main";

import * as ReactPaginate from "react-paginate";
import ProductsListing from "../components/productsListing/ProductsListing";
import CategoriesListing from "../components/categoriesListing/CategoriesListing";

import * as withRedux from "next-redux-wrapper";

import {
  initStore,
  startClock,
  addCount,
  store,
  addToCart,
  removeFromCart,
  serverRenderClock,
} from "../store";

interface Props {
  totalPages: number;
  sideMenuItems: any;
  menuItems: any;
}

interface State {
  category: string;
  showModal: boolean;
  isLoaderActive: boolean;
  products: Products[];
  page: number;
  totalPages: number;
}

interface InitialProps {
  query: any;
  res: any;
}

interface Products {
  item: boolean;
}

interface LoaderProps {
  isLoaderActive: boolean;
}

function Loader({ isLoaderActive }: LoaderProps) {
  if (!isLoaderActive) {
    return null;
  }

  return <div className={`loader loader__dark`}>Loading</div>;
}

class Products extends React.Component<Props, State> {
  static async getInitialProps({ query, res }: InitialProps) {
    const menuUrl = api.buildUrl(
      { paths: [api.WPMENUS, "menus", "325"] },
      api.SITEURL
    );
    const menuRes = await fetch(menuUrl);
    const menuJson = await menuRes.json();

    const sideMenuUrl = api.buildUrl(
      {
        paths: [api.WC, "products", "categories"],
        parameters: ["per_page=100"],
      },
      api.SITEURL
    );
    const sideMenuRes = await fetch(sideMenuUrl);
    const sideMenuJson = await sideMenuRes.json();

    const subCategoryItems = sideMenuJson
      .filter((item: any) => item.parent !== 0)
      .map((item: any) => {
        return {
          ...item,
          subCategories: sideMenuJson.filter((subCategoryItem: any) => {
            return subCategoryItem.parent === item.id;
          }),
        };
      });

    const sideMenuItems = sideMenuJson
      .filter((item: any) => item.parent === 0)
      .map((item: any) => {
        return {
          ...item,
          subCategories: subCategoryItems.filter((subCategoryItem: any) => {
            return subCategoryItem.parent === item.id;
          }),
        };
      });

    const initialPage = query.slug ? query.slug : 1;
    const initialProducts = await getProducts(api);

    return {
      menuItems: menuJson,
      sideMenuItems,
      ...initialProducts,
      ...initialPage,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      ...props,
      isLoaderActive: false,
    };
  }

  handleCategoryChange = (category: any) => {
    this.updateProducts(1, category);
  };

  handlePagination = (props: any) => {
    const page = props.selected + 1;
    const category = this.state.category;

    this.updateProducts(page, category);
  };

  updateProducts = async (page: number, category: string) => {
    this.setState({ isLoaderActive: true });

    const products = await getProducts(api, page, category);

    this.setState({ ...products, isLoaderActive: false });
  };

  render() {
    return (
      <Main
        title="Products"
        menuItems={this.props.menuItems}
        sideMenuItems={this.props.sideMenuItems}
      >
        <aside className="col-lg-3 sidebar_grid hidden-md-down">
          <div className="widget-container widget_desirees-subcategories">
            <div className="widget-container cat-list">
              <CategoriesListing
                categories={this.props.sideMenuItems}
                change={this.handleCategoryChange}
              />
            </div>
          </div>
        </aside>

        <div className="col-xs-12 col-lg-9">
          <main>
            <Loader isLoaderActive={this.state.isLoaderActive} />
            <ProductsListing products={this.state.products} />
          </main>

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={<a href="">...</a>}
            breakClassName={"pagination__btn button medium"}
            pageCount={this.state.totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePagination}
            containerClassName={"pagination"}
            pageClassName={"pagination__btn button medium"}
            nextClassName={"pagination__btn button medium"}
            previousClassName={"pagination__btn button medium"}
            activeClassName={"active"}
          />
        </div>
      </Main>
    );
  }
}

export default withRedux(initStore, null, null)(Products);
