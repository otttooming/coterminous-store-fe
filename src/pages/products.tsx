import * as api from "../services/api/Api";
import { getProducts } from "../services/productApi/productApi";
import { getSingleProduct } from "../services/productApi/singleProductApi";

import * as React from "react";
import Link from "next/link";
import "isomorphic-unfetch";
import Main from "../layouts/Main";

import * as ReactPaginate from "react-paginate";
import ProductsListing from "../components/productsListing/ProductsListing";
import CategoriesListing from "../components/categoriesListing/CategoriesListing";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductItem from "../components/productItem/ProductItem";

import * as withRedux from "next-redux-wrapper";
import { reduxForm, getFormValues, InjectedFormProps } from "redux-form";

import {
  initStore,
  startClock,
  addCount,
  store,
  addToCart,
  removeFromCart,
  serverRenderClock,
} from "../store";

interface Props extends InjectedFormProps {
  totalPages: number;
  sideMenuItems: any;
  menuItems: any;
  products: any;
  category?: string;
  page: number;
}

interface State {
  category?: string;
  isLoaderActive: boolean;
  products?: any;
  page: number;
  totalPages: number;
  isSingleProductOpen: boolean;
  singleProduct?: any;
}

interface InitialProps {
  query: any;
  res: any;
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

  constructor(props: Props) {
    super(props as Props);

    this.state = {
      products: props.products,
      totalPages: props.totalPages,
      category: props.category,
      page: props.products,
      singleProduct: {},
      isLoaderActive: false,
      isSingleProductOpen: false,
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

  getSingleProduct = async (
    e: React.SyntheticEvent<HTMLAnchorElement>,
    name: string
  ) => {
    e.preventDefault();

    const singleProduct = await getSingleProduct(api, name);

    this.setState({ singleProduct, isSingleProductOpen: true });
  };

  render() {
    const { menuItems, sideMenuItems, totalPages } = this.props;
    const { isSingleProductOpen } = this.state;
    return (
      <Main
        renderHeader={<Header title="Products" menuItems={menuItems} />}
        renderSidebar={
          !isSingleProductOpen && (
            <CategoriesListing
              categories={sideMenuItems}
              change={this.handleCategoryChange}
            />
          )
        }
        renderAfterMain={
          !isSingleProductOpen && (
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
          )
        }
        renderFooter={<Footer />}
      >
        <Loader isLoaderActive={this.state.isLoaderActive} />

        {!!this.state.isSingleProductOpen ? (
          <ProductItem
            product={this.state.singleProduct.product}
            images={this.state.singleProduct.images}
            variations={this.state.singleProduct.variations}
          />
        ) : (
          <ProductsListing
            products={this.state.products}
            onProductClick={this.getSingleProduct}
          />
        )}
      </Main>
    );
  }
}

const getShoppingCartFormValues = (state: any) => {
  return getFormValues("shoppingCart")(state) as any;
};

const mapStateToProps = (state: any) => ({
  formValues: getShoppingCartFormValues(state),
});

export default withRedux(initStore, mapStateToProps, null)(
  reduxForm({
    form: "shoppingCart",
  })(Products)
);
