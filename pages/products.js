
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import Page from '../layouts/main'

import ReactPaginate from 'react-paginate'

function Loader(props) {
  let isHidden = props.isHidden ? 'hidden-xs-up' : '';

  return(
    <div className={isHidden + ' loader loader__dark'}>
      Loading
    </div>
  )
}

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

function ProductsListing(props) {
  const products = props.products;
  const listProducts = products.map((product) =>
    <li itemScope itemType="http://schema.org/Product" className="col-xs-12 col-md-3 col-sm-6 products-listing__item">
      <figure className="aspect-ratio" style={{paddingBottom: '136.36363636364%'}}>
        <img width={220} height={300}
          className="aspect-ratio__img lazyloaded "
          alt="B Swish Bcute Classic Pearl"
          itemProp="image" sizes="(max-width: 220px) 100vw, 220px"
          data-src="https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-220x300.jpg"
          data-srcset="https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple.jpg 1135w"
          // srcSet="https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple.jpg 1135w"
          src={product.images[0].src} />
      </figure>
      <a itemProp="url" className="products-listing__link" href={'product/' + product.id}>
        <h3 itemProp="name" className="products-listing__name">
          {product.name}
        </h3>
      </a>
      <div className="products-listing__price-block">
        <span className="price__block">22,50€</span>
      </div>
    </li>

  );
  return (
    <ul className="row row--no-gutters products-listing">{listProducts}</ul>
  );
}

class Categories extends React.Component {
    constructor(props) {
      super(props);
      this.handleCatChange = this.handleCatChange.bind(this)
    }

    handleCatChange(event) {
      this.props.onCatChange(event)
    }

    render() {
        const sideMenuItems = this.props.sideMenuItems.map((item) =>
          <div className="cat-list__group ">
            <h2 className="cat-list__title">
              <a href="#" data-category={item.name} onClick={() => this.handleCatChange(item.id)}>
                <span className="cat-list__name">{item.name}</span>
                <span className="cat-list__desc" />
                <span className="cat-list__count">4</span>
              </a>
              <div className="cat-list__subcat-control control__items">
                <svg className="control__down" xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 501.5 501.5"><g><path fill="currentColor" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z" /></g></svg>
              </div>
            </h2>
            <ul className="cat-list__subcat">
            </ul>
          </div>
        )

        return (
            <ul className='menu'>{sideMenuItems}</ul>
        )
    }
}

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://spiceflow.net.ee/wp-json/wc/v2/products?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9&page=183')
    const json = await res.json()
    const resHeaders = res.headers.get('Link')
    const totalPages = res.headers.get('X-WP-TotalPages')


    const menuUrl = 'https://spiceflow.net.ee/wp-json/wp-api-menus/v2/menus/325?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9';
    const menuRes = await fetch(menuUrl)
    const menuJson = await menuRes.json()

    const sideMenuUrl = 'https://spiceflow.net.ee/wp-json/wc/v2/products/categories?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9&page=1&parent=0&per_page=100';
    const sideMenuRes = await fetch(sideMenuUrl)
    const sideMenuJson = await sideMenuRes.json()

    return {
      responseData: res,
      stars: json[7].name,
      products: json,
      menuItems: menuJson,
      sideMenuItems: sideMenuJson,
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
      page: 1,
      loaderIsHidden: true,
      category: ''
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate(nextProps, nextState)')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState)')
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleCatChange = (props) => {
    //this.setState({category: props})
    this.updateProducts(false, props)
  }

  updateProducts = (page, catProp) => {
    this.setState({loaderIsHidden: false})

    let pageNr = page ? page.selected + 1 : (this.state.page ? this.state.page : 1);
    let category = catProp ? catProp : '';

    let url = 'https://spiceflow.net.ee/wp-json/wc/v2/products?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9&page=' + pageNr + '&category=' + category

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
          this.setState({products: data, page: page.selected + 1, loaderIsHidden: true, category: category})

        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

  }

  render () {
    return (
      <Page title='Products' menuItems={this.props.menuItems} sideMenuItems={this.props.sideMenuItems}>
          <aside className='col-lg-3 sidebar_grid hidden-md-down'>
            <div className="widget-container widget_desirees-subcategories">
              <div className="widget-container cat-list">
                  <Categories sideMenuItems={this.props.sideMenuItems} onCatChange={this.handleCatChange} />
              </div>
            </div>
          </aside>

          <div className="col-xs-12 col-lg-9">

        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>

        <button onClick={this.updateProducts}>
          next
        </button>
        <p>Next.js has {this.props.stars} ⭐️</p>
        <Link prefetch href='/preact'><a>How about preact?</a></Link>
        <Link href='/wordpress'><a>wordpress?</a></Link>

          <main>
            <Loader isHidden={this.state.loaderIsHidden} />
            <ProductsListing products={this.state.products} />
          </main>

          <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={<a href="">...</a>}
              breakClassName={"pagination__btn button medium"}
              pageCount={this.props.totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.updateProducts}
              containerClassName={"pagination"}
              pageClassName={"pagination__btn button medium"}
              nextClassName={"pagination__btn button medium"}
              previousClassName={"pagination__btn button medium"}
              activeClassName={"active"} />
          </div>
      </Page>
    )
  }
}
