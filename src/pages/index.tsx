import * as api from "../services/api/Api";
import { getProducts } from "../services/productApi/productApi";
import { getSingleProduct } from "../services/productApi/singleProductApi";

import { getMainMenu, getSideMenu } from "../services/menuApi/menuApi";

import {
  CART_SLUGS,
  CHECKOUT_SLUGS,
  LOCATION_TYPES,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
  LANDING_SLUGS,
  SITE_NAME,
} from "../common/products/constants";

import * as React from "react";
import "isomorphic-unfetch";
import Main from "../layouts/Main";

import * as ReactPaginate from "react-paginate";
import ProductsListing from "../components/productsListing/ProductsListing";
import CategoriesListing from "../components/categoriesListing/CategoriesListing";
import CartView from "../components/cartView/CartView";
import CheckoutView from "../components/checkoutView/CheckoutView";
import LandingView from "../components/landingView/LandingView";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductItem from "../components/productItem/ProductItem";
import Loader from "../components/loader/Loader";

import * as withRedux from "next-redux-wrapper";
import { reduxForm, getFormValues, InjectedFormProps } from "redux-form";

import { LocationChangeProps } from "../common/products/typings";

import { initStore } from "../store";

interface Props extends InjectedFormProps {
  totalPages: number;
  sideMenuItems: any;
  menuItems: any;
  products: any;
  category?: string;
  page: number;
  formValues: any;
}

interface State {
  category?: string;
  isLoaderActive: boolean;
  products?: any;
  page: number;
  totalPages: number;
  navRouting: LocationChangeProps;
  singleProduct?: any;
}

interface InitialProps {
  query: any;
  res: any;
}

class IndexPage extends React.Component<Props, State> {
  static async getInitialProps({ query, res }: InitialProps) {
    const initialPage = query.slug ? query.slug : 1;
    const initialProducts = await getProducts(api);
    const menuItems = await getMainMenu(api);
    const sideMenuItems = await getSideMenu(api);

    return {
      express: {
        query,
      },
      menuItems,
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
      singleProduct: null,
      isLoaderActive: false,
      navRouting: {
        type: LOCATION_TYPES.PAGE,
        view: LANDING_SLUGS.DEFAULT,
      },
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

  getSingleProduct = async (name: string) => {
    if (
      !(
        !!this.state.singleProduct &&
        this.state.singleProduct.product.slug === name
      )
    ) {
      const singleProduct = await getSingleProduct(api, name);

      this.setState({ singleProduct });
    }
  };

  handleHistoryChange = (navRouting: LocationChangeProps) => {
    const siteName = SITE_NAME.DEFAULT;

    const title = Object.values(LANDING_SLUGS).includes(navRouting.view)
      ? ""
      : navRouting.view.toLowerCase();

    const pathName = !!navRouting.pathName ? navRouting.pathName.join("/") : "";

    const root = `${window.location.protocol}//${window.location.host}`;

    history.pushState("", siteName, `${root}/${title}/${pathName}`);

    this.setState({ navRouting });
  };

  handleLocationChange = async (navRouting: LocationChangeProps) => {
    const { pathName = null } = navRouting;

    if (navRouting.view === PRODUCT_SLUGS.DEFAULT && !!pathName) {
      await this.getSingleProduct(pathName[0]);

      this.handleHistoryChange(navRouting);
    }

    if (
      navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT ||
      navRouting.view === CART_SLUGS.DEFAULT ||
      navRouting.view === CHECKOUT_SLUGS.DEFAULT
    ) {
      this.handleHistoryChange(navRouting);
    }
  };

  render() {
    const { menuItems, sideMenuItems, totalPages, formValues } = this.props;
    const { navRouting } = this.state;
    return (
      <Main
        renderHeader={
          <Header
            title="Products"
            menuItems={menuItems}
            formValues={formValues}
            handleLocationChange={this.handleLocationChange}
          />
        }
        renderSidebar={
          !!(navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT) && (
            <CategoriesListing
              categories={sideMenuItems}
              change={this.handleCategoryChange}
            />
          )
        }
        renderAfterMain={
          !!(navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT) && (
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

        {!!(navRouting.view === LANDING_SLUGS.DEFAULT) && (
          <LandingView onLocationChange={this.handleLocationChange} />
        )}

        {!!(navRouting.view === PRODUCT_SLUGS.DEFAULT) && (
          <ProductItem
            product={this.state.singleProduct.product}
            images={this.state.singleProduct.images}
            variations={this.state.singleProduct.variations}
          />
        )}

        {!!(navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT) && (
          <ProductsListing
            products={this.state.products}
            onLocationChange={this.handleLocationChange}
          />
        )}

        {!!(navRouting.view === CART_SLUGS.DEFAULT) && (
          <CartView
            formValues={formValues}
            onLocationChange={this.handleLocationChange}
          />
        )}

        {!!(navRouting.view === CHECKOUT_SLUGS.DEFAULT) && (
          <CheckoutView
            formValues={formValues}
            onLocationChange={this.handleLocationChange}
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
  })(IndexPage)
);
