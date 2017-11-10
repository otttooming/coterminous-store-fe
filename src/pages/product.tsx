import * as api from "../services/api/Api";
import * as mediaApi from "../services/mediaApi/mediaApi";
import { getSingleProduct } from "../services/productApi/singleProductApi";
import * as withRedux from "next-redux-wrapper";

import * as React from "react";
import Link from "next/link";
import "isomorphic-unfetch";
import Main from "../layouts/Main";

import ProductItem from "../components/productItem/ProductItem";

import {
  initStore,
  startClock,
  addCount,
  store,
  addToCart,
  removeFromCart,
  serverRenderClock,
} from "../store";

class Product extends React.Component {
  static async getInitialProps({ query, res }) {
    const { params } = query;
    const { name } = params;

    const menuUrl = api.buildUrl(
      { paths: [api.WPMENUS, "menus", "325"] },
      api.SITEURL
    );
    const menuRes = await fetch(menuUrl);
    const menuJson = await menuRes.json();

    const initialProduct = await getSingleProduct(api, name);

    return {
      ...initialProduct,
      menuItems: menuJson,
    };
  }

  render() {
    return (
      <Main title={this.props.product.name} menuItems={this.props.menuItems}>
        <ProductItem
          product={this.props.product}
          images={this.props.images}
          variations={this.props.variations}
        />
      </Main>
    );
  }
}

export default withRedux(initStore, null, null)(Product);
