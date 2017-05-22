import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    const res = await fetch('https://spiceflow.net.ee/wp-json/wc/v2/products/' + id + '?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9')
    const json = await res.json()

    return {
        id: id,
        product: json
     }
  }

  render () {
    return <div>
      <h1>My {this.props.id} blog post</h1>
      <img src={this.props.product.images[0].src} alt=""/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  }
}