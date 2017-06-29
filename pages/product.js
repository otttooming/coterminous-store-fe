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

function fetchData(query) {

  const id = query.slug

  let variationsJson = []
  let product = []

  const resp = new Promise(resolve => {

    fetch(api.buildUrl({ paths: [api.WC, 'products'], parameters: ['slug=' + id] }))
      .then(req => {

        return req.json()
      })
      .then(item => {
        product.push(item[0])

        return fetchVariationData(item[0].id)
      })
      .then(variations => {

        resolve({
          id: query.slug,
          product: product[0],
          variations: variations,
          varUrl: api.buildUrl({ paths: [api.WC, 'products', product[0].id, 'variations'] })
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

        <Product product={this.props.product} variations={this.props.variations} />

      </Page>
    )
  }
}
