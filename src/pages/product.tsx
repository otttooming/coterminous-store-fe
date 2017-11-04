import * as api from "../services/api/Api";
import * as mediaApi from "../services/mediaApi/mediaApi";
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

async function fetchVariations(id) {
  const url = api.buildUrl(
    { paths: [api.WC, "products", id, "variations"] },
    api.SITEURL
  );

  const request = await fetch(url);
  const data = await request.json();

  return data;
}

async function fetchData(name) {
  const url = api.buildUrl(
    { paths: [api.WC, "products"], parameters: ["slug=" + name] },
    api.SITEURL
  );

  const productReq = await fetch(url);
  const productData = await productReq.json();
  const productItem = await productData[0];

  const imagesItems = await mediaApi.getAllMedia(
    productItem.images.map(item => item.id),
    api
  );

  const varData = await fetchVariations(productItem.id);

  return {
    id: name,
    product: productItem,
    images: imagesItems,
    variations: varData,
    varUrl: api.buildUrl(
      {
        paths: [api.WC, "products", productItem.id, "variations"],
      },
      api.SITEURL
    ),
  };
}

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

    const productData = await fetchData(name);

    return {
      ...productData,
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
