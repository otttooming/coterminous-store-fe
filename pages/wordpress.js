
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'


function NumberList(props) {
  const products = props.products;
  const listProducts = products.map((product) =>
    <li key={product.id}>
      {product.name}
      {product.images[0].src}
      <img
          src={product.images[0].src}
      />
    </li>
  );
  return (
    <ul>{listProducts}</ul>
  );
}

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://spiceflow.net.ee/wp-json/wc/v1/products?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9')
    const json = await res.json()
    return {
      stars: json[7].name,
      products: json
    }
  }

  render () {
    return (
      <div>
        <p>Next.js has {this.props.stars} ⭐️</p>
        <Link prefetch href='/preact'><a>How about preact?</a></Link>
        <Link href='/wordpress'><a>wordpress?</a></Link>
        <NumberList products={this.props.products} />,
      </div>
    )
  }
}
