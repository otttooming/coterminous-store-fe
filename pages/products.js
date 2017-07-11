import * as api from '../components/api'

import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import Page from '../layouts/main'

import ReactPaginate from 'react-paginate'
import ReactModal from 'react-modal'

import Product from '../components/product'

const modalCustomStyles = {
  content: {
    backgroundImage: 'radial-gradient(circle at 50%,rgba(115,14,150,1.0) 40%,rgba(38,5,49,1.0) 100%)'
  }
}

function Loader(props) {
  let isHidden = props.isHidden ? 'hidden-xs-up' : '';

  return (
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

class ProductsListing extends React.Component {
  constructor(props) {
    super(props)
  }

  handleProductClick = (event) => {
    this.props.openProduct(event)
  }

  render() {
    const products = this.props.products;
    const listProducts = products.map((product) =>
      <li itemScope itemType="http://schema.org/Product" className="col-xs-12 col-md-3 col-sm-6 products-listing__item">
        <figure className="aspect-ratio" style={{ paddingBottom: '136.36363636364%' }}>
          <img width={220} height={300}
            className="aspect-ratio__img lazyloaded "
            alt="B Swish Bcute Classic Pearl"
            itemProp="image" sizes="(max-width: 220px) 100vw, 220px"
            data-src="https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-220x300.jpg"
            data-srcset="https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple.jpg 1135w"
            // srcSet="https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2015/11/b_swish_bcute_classic_pearl_purple.jpg 1135w"
            src={product.images[0].src}
          />
        </figure>
        {/*<a itemProp="url" className="products-listing__link" onClick={() => this.handleProductClick(product.id)}>
              <h3 itemProp="name" className="products-listing__name">
                {product.name}
              </h3>
            </a>*/}
        {/*<Link prefetch href={"/product/" + product.slug}>
            <a itemProp="url" className="products-listing__link">
              <h3 itemProp="name" className="products-listing__name">
                {product.name}
              </h3>
            </a>
            </Link>*/}
        <a href={"/product/" + product.slug} itemProp="url" className="products-listing__link">
          <h3 itemProp="name" className="products-listing__name">
            {product.name}
          </h3>
        </a>
        <div className="products-listing__price-block">
          <span className="price__block">22,50€</span>
        </div>
      </li>
    )

    return (
      <ul className="row row--no-gutters products-listing">{listProducts}</ul>
    )
  }
}

class Categories extends React.Component {
  constructor(props) {
    super(props)
  }

  handleCatChange = (event) => {
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
  static async getInitialProps({ query, res }) {
    // eslint-disable-next-line no-undef

    const pageNr = query.slug ? query.slug : 1
    const url = api.buildUrl({ paths: [api.WC, 'products'], parameters: ['in_stock=true', 'status=publish', 'page=' + pageNr, 'per_page=16'] })

    const resp = await fetch(url)
    const json = await resp.json()
    const resHeaders = resp.headers.get('Link')
    const totalPages = resp.headers.get('X-WP-TotalPages')

    const menuUrl = api.buildUrl({ paths: [api.WPMENUS, 'menus', '325'] });
    const menuRes = await fetch(menuUrl)
    const menuJson = await menuRes.json()

    const sideMenuUrl = api.buildUrl({ paths: [api.WC, 'products', 'categories'], parameters: ['parent=0', 'per_page=100'] });
    const sideMenuRes = await fetch(sideMenuUrl)
    const sideMenuJson = await sideMenuRes.json()

    return {
      test: url,
      query: query,
      responseData: resp,
      stars: json[7].name,
      products: json,
      menuItems: menuJson,
      sideMenuItems: sideMenuJson,
      isToggleOn: true,
      header: resHeaders,
      totalPages: parseInt(totalPages),
      page: pageNr
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
      initialProps: props,
      date: new Date(),
      products: props.products,
      page: props.page,
      loaderIsHidden: true,
      category: '',
      totalPages: parseInt(props.totalPages),
      showModal: false
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
    let category = props;

    this.updateProducts({ page: 1, category: category })
  }

  handlePagination = (props) => {
    let pageNr = props.selected + 1;
    let category = this.state.category;

    this.updateProducts({ page: pageNr, category: category });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleProductOpen = (props) => {
    let id = props

    fetch(api.buildUrl({ paths: [api.WC, 'products', id], }))
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
          this.setState({ activeProduct: data, showModal: true })

        });
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

  }

  updateProducts = (props) => {
    this.setState({ loaderIsHidden: false, products: [] })

    let pageNr = props.page ? props.page : (this.state.page ? this.state.page : 1);
    let category = props.category ? props.category : (this.state.category ? this.state.category : '');
    let categoryParameter = category ? 'category=' + category : ''
    let perPage = props.perPage ? props.perPage : 16

    let url = api.buildUrl({ paths: [api.WC, 'products'], parameters: ['in_stock=true', 'status=publish', categoryParameter, 'page=' + pageNr, 'per_page=' + perPage] })

    fetch(url)
      .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        let totalPages = parseInt(response.headers.get('X-WP-TotalPages'))


        // Examine the text in the response
        response.json().then((data) => {
          console.log(data);
          this.setState({ products: data, page: pageNr, loaderIsHidden: true, category: category, totalPages: totalPages })

        });
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

  }

  render() {
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

          <div className='hidden-xs-up'>
            <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

            <button onClick={this.updateProducts}>
              next
            </button>
            <p>Next.js has {this.props.stars} ⭐️</p>
            <Link prefetch href='/preact'><a>How about preact?</a></Link>
            <Link href='/wordpress'><a>wordpress?</a></Link>
          </div>

          <main>
            <Loader isHidden={this.state.loaderIsHidden} />
            <ProductsListing products={this.state.products} openProduct={this.handleProductOpen} />

            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              style={modalCustomStyles}
            >
              <button onClick={this.handleCloseModal}>Close Modal</button>

              <Product product={this.state.activeProduct} />

            </ReactModal>
          </main>

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={<a href="">...</a>}
            breakClassName={"pagination__btn button medium"}
            pageCount={this.state.totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePagination}
            containerClassName={"pagination"}
            pageClassName={"pagination__btn button medium"}
            nextClassName={"pagination__btn button medium"}
            previousClassName={"pagination__btn button medium"}
            activeClassName={"active"}
          />
        </div>
      </Page>
    )
  }
}
