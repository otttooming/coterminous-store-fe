import * as api from '../components/api'

import React from 'react'
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
    return await fetchData(query)
  }

  render() {
    return (
      <Page title={this.props.product.name}>

        <Product product={this.props.product} images={this.props.images} variations={this.props.variations} />

      </Page>
    )
  }
}
