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

function fetchAllmedia(idArr) {
  return Promise.all(idArr.map(id => fetchMedia(id))).then(images => images);
}

function fetchMedia(idQuery) {
  const id = idQuery;

  const resp = new Promise(resolve => {
    fetch(api.buildUrl({ paths: [api.WP, "media", id] }, api.SITEURL))
      .then(req => {
        return req.json();
      })
      .then(media => {
        resolve(media);
      });
  });

  return resp;
}

function fetchData(name) {
  let variationsJson = [];
  let product = {};
  let images = [];

  const resp = new Promise(resolve => {
    fetch(
      api.buildUrl(
        { paths: [api.WC, "products"], parameters: ["slug=" + name] },
        api.SITEURL
      )
    )
      .then(req => {
        return req.json();
      })
      .then(item => {
        product = item[0];

        return fetchAllmedia(product.images.map(item => item.id));
      })
      .then(imageResponse => {
        images = imageResponse;

        return fetchVariationData(product.id);
      })
      .then(variations => {
        resolve({
          id: name,
          product: product,
          images: images,
          variations: variations,
          varUrl: api.buildUrl(
            {
              paths: [api.WC, "products", product.id, "variations"],
            },
            api.SITEURL
          ),
        });
      });
  });

  return resp;
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
