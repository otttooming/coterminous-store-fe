import * as api from "../services/api/Api";
import * as Routing from "../services/routing/routing";
import { getMainMenu, getSideMenu } from "../services/menuApi/menuApi";

import {
  CART_SLUGS,
  CHECKOUT_SLUGS,
  LOCATION_TYPES,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
  LANDING_SLUGS,
  SITE_NAME,
  CATEGORY_SLUGS,
  VIEW_NAMES,
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
  categories: any;
  menuItems: any;
  products: any;
  formValues: any;
  initialRouting: State;
}

export interface State {
  categories: any;
  isLoaderActive: boolean;
  products?: any;
  navRouting?: LocationChangeProps;
  singleProduct?: any;
}

interface InitialProps {
  query: any;
  res: any;
}

class IndexPage extends React.Component<Props, State> {
  static async getInitialProps({ query, res }: InitialProps) {
    const menuItems = await getMainMenu(api);
    const categories = await getSideMenu(api);

    const navRouting: LocationChangeProps = Routing.createNavRoutingFromQuery(
      query
    );

    const initialProps: State = {
      navRouting,
      categories,
      isLoaderActive: false,
    };

    const initialRouting: State = await Routing.handleRouting(initialProps);

    return {
      express: { query },
      menuItems,
      categories,
      initialRouting,
    };
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      categories: props.categories,
      singleProduct: null,
      isLoaderActive: false,
      ...props.initialRouting,
    };
  }

  handlePagination = (props: any) => {
    const page = props.selected + 1;

    const nextNavRouting = {
      ...this.state.navRouting,
      page,
    };

    this.handleLocationChange(nextNavRouting);
  };

  handleHistoryChange = (navRouting: LocationChangeProps) => {
    Routing.handleHistoryChange(navRouting);

    this.setState({ isLoaderActive: false });
  };

  handleLocationChange = async (navRouting: LocationChangeProps) => {
    this.setState({ isLoaderActive: true });

    const props = { ...this.state, navRouting };

    const routing = await Routing.handleRouting(props);

    this.setState({ navRouting, ...routing }, () => {
      this.handleHistoryChange(this.state.navRouting);
    });
  };

  render() {
    const { menuItems, categories, formValues } = this.props;
    const { navRouting } = this.state;
    const { totalPages = 1, page = 1 } = navRouting;

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
          !!(
            navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT ||
            navRouting.view === CATEGORY_SLUGS.DEFAULT
          ) && (
            <CategoriesListing
              categories={categories}
              onLocationChange={this.handleLocationChange}
            />
          )
        }
        renderAfterMain={
          !!(
            navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT ||
            navRouting.view === CATEGORY_SLUGS.DEFAULT
          ) && (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={<a href="">...</a>}
              breakClassName={"pagination__btn button medium"}
              pageCount={totalPages}
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

        {!!(
          navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT ||
          navRouting.view === CATEGORY_SLUGS.DEFAULT
        ) && (
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
