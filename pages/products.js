
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

import ReactPaginate from 'react-paginate'

function NumberList(props) {
  const products = props.products;
  const listProducts = products.map((product) =>
    <li key={product.id}>
      {product.images[0].src}
    </li>
  );
  return (
    <ul>{listProducts}</ul>
  );
}

function NumberList2(props) {
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
    const res = await fetch('https://spiceflow.net.ee/wp-json/wc/v2/products?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9&page=183')
    const json = await res.json()
    const resHeaders = res.headers.get('Link')
    const totalPages = res.headers.get('X-WP-TotalPages')

    return {
      responseData: res,
      stars: json[7].name,
      products: json,
      isToggleOn: true,
      header: resHeaders,
      totalPages: parseInt(totalPages),
      page: 1
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      initialProps: props,
      date: new Date(),
      products: props.products,
      page: 1
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  updateProductPage = (page) => {
    this.setState({page: page.selected + 1})

    this.updateProducts()
  }

  updateProducts = () => {
    let url = 'https://spiceflow.net.ee/wp-json/wc/v2/products?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9&page=' + this.state.page

    fetch(url)
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then((data) => {
          console.log(data);
          this.setState({products: data})

        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>

        <button onClick={this.updateProducts}>
          next
        </button>
        <p>Next.js has {this.props.stars} ⭐️</p>
        <Link prefetch href='/preact'><a>How about preact?</a></Link>
        <Link href='/wordpress'><a>wordpress?</a></Link>
        <NumberList products={this.state.products} />

        <ReactPaginate previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
                pageCount={this.props.totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.updateProductPage}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
      </div>
    )
  }
}
