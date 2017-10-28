import * as api from "../services/api/Api";
import * as withRedux from "next-redux-wrapper";

import * as React from "react";
import Link from "next/link";
import "isomorphic-fetch";
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

function fetchVariationData(idQuery) {
  const id = idQuery;

  const resp = new Promise(resolve => {
    fetch(
      api.buildUrl(
        { paths: [api.WC, "products", id, "variations"] },
        api.SITEURL
      )
    )
      .then(req => {
        return req.json();
      })
      .then(variation => {
        resolve(variation);
      });
  });

  return resp;
}

function fetchAllmedia(ids) {
  return Promise.all(ids.map(id => fetchMedia(id))).then(images => images);
}

async function fetchMedia(id) {
  const url = api.buildUrl({ paths: [api.WP, "media", id] }, api.SITEURL);

  const data = await fetch(url);
  const dataJson = await data.json();

  return dataJson;
}

async function fetchData(name) {
  const url = api.buildUrl(
    { paths: [api.WC, "products"], parameters: ["slug=" + name] },
    api.SITEURL
  );

  const productReq = await fetch(url);
  const productData = await productReq.json();
  const productItem = await productData[0];

  const imagesItems = await fetchAllmedia(
    productItem.images.map(item => item.id)
  );

  const varData = await fetchVariationData(productItem.id);

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
      menuItems: menuJson,
      productData,
    };
  }

  render() {
    return (
      <Main
        title={this.props.productData.product.name}
        menuItems={this.props.menuItems}
      >
        <ProductItem
          product={this.props.productData.product}
          images={this.props.productData.images}
          variations={this.props.productData.variations}
        />
      </Main>
    );
  }
}

export default withRedux(initStore, null, null)(Product);
