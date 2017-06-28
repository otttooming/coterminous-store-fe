import * as api from '../components/api'

import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import Page from '../layouts/main'

import Product from '../components/product'

function  fetchData(query) {

  const id = query.slug

  let variationsJson = {}

  const resp = new Promise(resolve => {
    fetch(api.buildUrl({ paths: [api.WC, 'products'], parameters: ['slug=' + id] })).then(value => {
      value.json().then(value => {

        resolve({
          id: query.slug,
          product: value[0],
          variations: variationsJson,
          varUrl: api.buildUrl({ paths: [api.WC, 'products', value[0].id, 'variations'] })
        })
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

        <Product product={this.props.product} />

      </Page>
    )
  }
}
