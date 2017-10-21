import * as api from "../services/api/Api";

import * as React from "react";
import Link from "next/link";
import "isomorphic-fetch";
import Main from "../layouts/Main";

import * as ReactPaginate from "react-paginate";
import Product from "../components/product";
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
    const pageNr = query.slug ? query.slug : 1;

    const url = api.buildUrl(
      {
        paths: [api.WC, "products"],
        parameters: [
          "in_stock=true",
          "status=publish",
          "page=" + pageNr,
          "per_page=16",
        ],
      },
      api.SITEURL
    );
    const resp = await fetch(url);
    const json = await resp.json();
    const resHeaders = resp.headers.get("Link");
    const totalPages = resp.headers.get("X-WP-TotalPages");

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

    return {
      query,
      responseData: resp,
      products: json,
      menuItems: menuJson,
      sideMenuItems,
      isToggleOn: true,
      header: resHeaders,
      totalPages: parseInt(totalPages, 10),
      page: pageNr,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      page: props.page,
      isLoaderActive: false,
      category: "",
      totalPages: parseInt(props.totalPages, 10),
      showModal: false,
    };
  }

  handleCategoryChange = (id: any) => {
    this.updateProducts({ category: id, page: 1 });
  };

  handlePagination = (props: any) => {
    const pageNr = props.selected + 1;
    const category = this.state.category;

    this.updateProducts({ category, page: pageNr });
  };

  updateProducts = (props: any) => {
    this.setState({ isLoaderActive: true, products: [] });
    const pageNr = props.page
      ? props.page
      : this.state.page ? this.state.page : 1;
    const category = props.category
      ? props.category
      : this.state.category ? this.state.category : "";
    const categoryParameter = category ? "category=" + category : "";
    const perPage = props.perPage ? props.perPage : 16;

    const url = api.buildUrl(
      {
        paths: [api.WC, "products"],
        parameters: [
          "in_stock=true",
          "status=publish",
          categoryParameter,
          "page=" + pageNr,
          "per_page=" + perPage,
        ],
      },
      api.SITEURL
    );

    fetch(url).then(response => {
      const totalPages = parseInt(response.headers.get("X-WP-TotalPages"), 10);

      // Examine the text in the response
      response.json().then(data => {
        this.setState({
          totalPages,
          category,
          products: data,
          page: pageNr,
          isLoaderActive: false,
        });
      });
    });
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
