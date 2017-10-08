import * as api from '../components/api'

import * as React from 'react';
import Link from 'next/link'
import 'isomorphic-fetch'
import Page from '../layouts/main'

import Product from '../components/product'

function fetchVariationData(idQuery) {

  const id = idQuery

  const resp = new Promise(resolve => {
    fetch(api.buildUrl({ paths: [api.WC, 'products', id, 'variations'] }))
      .then(req => {
        return req.json()
      })
      .then(variation => {

        resolve(variation)
      })
  })

  return resp
}

function fetchAllmedia(idArr) {

  return Promise.all(idArr.map(id => fetchMedia(id))).then(images => images)
}

function fetchMedia(idQuery) {

  const id = idQuery

  const resp = new Promise(resolve => {
    fetch(api.buildUrl({ paths: [api.WP, 'media', id] }))
      .then(req => {
        return req.json()
      })
      .then(media => {

        resolve(media)
      })
  })

  return resp
}

function fetchData(query) {

  const id = query.slug

  let variationsJson = []
  let product = {}
  let images = []

  const resp = new Promise(resolve => {

    fetch(api.buildUrl({ paths: [api.WC, 'products'], parameters: ['slug=' + id] }))
      .then(req => {

        return req.json()
      })
      .then(item => {
        product = item[0]

        return fetchAllmedia(product.images.map(item => item.id))
      })
      .then(imageResponse => {
        images = imageResponse

        return fetchVariationData(product.id)
      })
      .then(variations => {

        resolve({
          id: query.slug,
          product: product,
          images: images,
          variations: variations,
          varUrl: api.buildUrl({ paths: [api.WC, 'products', product.id, 'variations'] })
        })
      })
  })

  return resp
}

export default class extends React.Component {
  static async getInitialProps({ query, res }) {
    const menuUrl = api.buildUrl({ paths: [api.WPMENUS, 'menus', '325'] });
    const menuRes = await fetch(menuUrl)
    const menuJson = await menuRes.json()

    const productData = await fetchData(query)

    return {
      menuItems: menuJson,
      productData
    }
  }

  render() {
    return (
      <Page title={this.props.productData.product.name} menuItems={this.props.menuItems}>

        <Product product={this.props.productData.product} images={this.props.productData.images} variations={this.props.productData.variations} />

      </Page>
    )
  }
}
