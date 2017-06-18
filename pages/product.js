import * as api from '../components/api'

import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import Page from '../layouts/main'

import Product from '../components/product'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {

    const res = await fetch( api.buildUrl({paths: [api.WC, 'products'], parameters: ['slug=' + id]}) )
    const json = await res.json()

    return {
        id: id,
        product: json[0]
     }
  }

  render () {
    return (
      <Page title={this.props.product.name}>

        <Product product={this.props.product} />

      </Page>
    )
  }
}