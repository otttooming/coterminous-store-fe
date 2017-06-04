
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import Page from '../layouts/main'

import ReactPaginate from 'react-paginate'
import ReactModal from 'react-modal'

const SITEURL = 'https://spiceflow.net.ee'

const APIURL =  'https://spiceflow.net.ee/wp-json/wc/v2/products?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9&per_page=16'

const APIWC = 'wp-json/wc/v2'
const APIWP = 'wp-json/wc/v2'
const APIWPMENUS = 'wp-json/wp-api-menus/v2'
const APISECRET = 'consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9'

function buildApiUrl(props) {
    // {paths: [], parameters: []}
    let url = []

    url.push(SITEURL)

    if (props.paths === undefined || props.paths.length === 0) {
      return url.join('') + '?' + APISECRET
    }

    props.paths.map((path) => {
      url.push('/')
      url.push(path)
    })

    console.log(props.parameters);

    if (props.parameters === undefined || props.parameters.length === 0) {
      return url.join('') + '?' + APISECRET
    }

    url.push('?')

    props.parameters.map((parameter, i) => {
      url.push(parameter)

      props.parameters.length === i + 1 ? '' : url.push('&')
    })

    return url.join('') + '&' + APISECRET
}

const modalCustomStyles = {
    content: {
          backgroundImage: 'radial-gradient(circle at 50%,rgba(115,14,150,1.0) 40%,rgba(38,5,49,1.0) 100%)'
      }
}

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
            <figure className="aspect-ratio" style={{paddingBottom: '136.36363636364%'}}>
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
            <a itemProp="url" className="products-listing__link" onClick={() => this.handleProductClick(product.id)}>
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

class Product extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        let thumbs = this.props.product.images
        let productThumbs = thumbs.map((image) =>
            <a className="product-thumb__link lightbox" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject" href="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg" data-size="1135x1550" data-pswp-uid={2}>
              <figure className="aspect-ratio" style={{paddingBottom: '136.36363636364%'}}>
                <img
                  width={220}
                  height={300}
                  className="product__image aspect-ratio__img lazyloaded "
                  alt="Pretty Love Uriah / Vincent"
                  itemProp="thumbnail"
                  sizes="(max-width: 220px) 100vw, 220px"
                  data-src="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg"
                  data-srcset="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg 1135w"
                  //srcSet="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg 1135w"
                  src={image.src} />
              </figure>
            </a>
        )

        let attributes = this.props.product.attributes
        let productAttributes = attributes.map((attribute) =>
            <tr className>
              <th>{attribute.name}</th>
              <td>
                <p>{attribute.options.map((option) => option + ' ')}</p>
              </td>
            </tr>
        )

        let categories = this.props.product.categories
        let productCategories = categories.map((category) =>
            <a href="#" rel="tag">{category.name}</a>
        )

        let tags = this.props.product.tags
        let productTags = tags.map((tag) =>
            <a href="#" rel="tag">{tag.name}</a>
        )
        return (
            <div className="container">
              <div itemScope itemType="http://schema.org/Product" className="row product">
                <div className="col-xs-12 col-md-5 product__left-wrap">
                  <a className="main-image product__main-image lightbox" itemProp="image" href="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent.jpg" rel="thumbnails" title="pretty_love_uriah_vincent" data-size="1135x1550" data-pswp-uid={1}>
                    <figure className="aspect-ratio" style={{paddingBottom: '136.58854166667%'}}><img width={768} height={1049} className="aspect-ratio__img lazyloaded " alt="Pretty Love Uriah / Vincent" itemProp="image" sizes="(max-width: 768px) 100vw, 768px"
                        data-src="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent.jpg"
                        data-srcset="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent.jpg 1135w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent-73x100.jpg 73w"
                        // srcSet="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent.jpg 1135w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent-73x100.jpg 73w"
                        src={this.props.product.images[0].src} />
                    </figure>
                  </a>
                  <div className="product-thumb__gallery" itemScope itemType="http://schema.org/ImageGallery">
                    {productThumbs}
                  </div>
                </div>
                <div className="col-xs-12 col-md-7">
                  <div className="product__mainblock product_description_mainblock productcol summary">
                    <h1 itemProp="name" className="product__title">{this.props.product.name}</h1>
                    <div className="main-info product___price-wrap" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                      <div itemProp="price" className="product__price-block product__price-block-big">
                        <span className="price__block">{this.props.product.price}</span>  </div>
                      <meta itemProp="price" content={60} />
                      <meta itemProp="priceCurrency" content="EUR" />
                      <link itemProp="availability" href="http://schema.org/InStock" />
                      <div className="product-stock in-stock"><span className="stock__header">Availability</span> <span className="stock__number">In stock</span></div></div>
                    <div className="product-variations">
                      <hr />
                      <div className="product-variations__item">
                        <div className="description" />
                        <div className="product-variations__attribute"><span>Variant: uriah</span></div>
                        <div className="product-variations__price "><span className="price__block">60€</span></div>
                        <div className="form">
                          <form className="product-variations__cart addto" action="https://www.aadliaare.ee/en/pood/pretty-love-uriah-vincent/" method="post" encType="multipart/form-data">
                            <div className="product-qty__wrap qty-block" id="product-quantity">
                              <label className="qty-block__title">Quantity</label>
                              <input type="number" step={1} min={1} max={3} name="quantity" defaultValue={1} title="Qty" className="qty-block__input input-text qty text" size={4} />
                            </div>
                            <label className="button medium active">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="addto__icon"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" fill="currentColor" /></svg>
                              <input type="submit" name defaultValue visibility="hidden" style={{display: 'none'}} />
                              Add to cart                      </label>
                            <input type="hidden" name="attribute_pa_variant" defaultValue="uriah" />
                            <input type="hidden" name="variation_id" defaultValue={20712} />
                            <input type="hidden" name="product_id" defaultValue={20711} />
                            <input type="hidden" name="add-to-cart" defaultValue={20711} />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="product-variations__item">
                        <div className="description" />
                        <div className="product-variations__attribute"><span>Variant: vincent</span></div>
                        <div className="product-variations__price "><span className="price__block">60€</span></div>
                        <div className="form">
                          <form className="product-variations__cart addto" action="https://www.aadliaare.ee/en/pood/pretty-love-uriah-vincent/" method="post" encType="multipart/form-data">
                            <div className="product-qty__wrap qty-block" id="product-quantity">
                              <label className="qty-block__title">Quantity</label>
                              <input type="number" step={1} min={1} max={3} name="quantity" defaultValue={1} title="Qty" className="qty-block__input input-text qty text" size={4} />
                            </div>
                            <label className="button medium active">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="addto__icon"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" fill="currentColor" /></svg>
                              <input type="submit" name defaultValue visibility="hidden" style={{display: 'none'}} />
                              Add to cart                      </label>
                            <input type="hidden" name="attribute_pa_variant" defaultValue="vincent" />
                            <input type="hidden" name="variation_id" defaultValue={20713} />
                            <input type="hidden" name="product_id" defaultValue={20711} />
                            <input type="hidden" name="add-to-cart" defaultValue={20711} />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__details-wrap mt1">
                    <div className="product__details-block">
                      <h2 className="tab-title opened">
                        Description
                      </h2>
                      <div id="content_tab_1" className="tab-content" style={{display: 'block'}} dangerouslySetInnerHTML={{__html: this.props.product.description}}></div>
                    </div>

                    <div className="product__details-block">
                      <h2 className="tab-title ">
                        Additional Information
                      </h2>
                      <div id="content_tab_2" className="tab-content">
                        <div className="product__attributes">
                          <table className="shop_attributes">
                            <tbody>
                              {productAttributes}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="product__details-block product-meta posted_in">
                      <h2 className="posted-in__header">Product categories</h2>
                      {productCategories}
                    </div>
                    <div className="product__details-block product-meta tagged_as">
                      <h2 className="tagged-as__header">Company</h2>
                      {productTags}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch(buildApiUrl({paths: [APIWC, 'products'], parameters: ['per_page=16']}))
    const json = await res.json()
    const resHeaders = res.headers.get('Link')
    const totalPages = res.headers.get('X-WP-TotalPages')


    const menuUrl = buildApiUrl({paths: [APIWPMENUS, 'menus', '325']});
    const menuRes = await fetch(menuUrl)
    const menuJson = await menuRes.json()

    const sideMenuUrl = buildApiUrl({paths: [APIWC, 'products', 'categories'], parameters: ['parent=0', 'per_page=100']});
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

    this.updateProducts({page: 1, category: category})
  }

  handlePagination = (props) => {
    let pageNr = props.selected + 1;
    let category = this.state.category;

    this.updateProducts({page: pageNr, category: category });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleProductOpen = (props) => {
    let id = props

    fetch(buildApiUrl({paths: [APIWC, 'products', id], }))
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
          this.setState({activeProduct: data, showModal: true})

        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

  }

  updateProducts = (props) => {
    this.setState({loaderIsHidden: false})

    let pageNr = props.page ? props.page : (this.state.page ? this.state.page : 1);
    let category = props.category ? '&category=' + props.category : (this.state.category ? '&category=' + this.state.category : '');

    let url = buildApiUrl({paths: [APIWC, 'products'], parameters: [pageNr, category]})

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
          this.setState({products: data, page: pageNr, loaderIsHidden: true, category: category, totalPages: totalPages})

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
              activeClassName={"active"} />
          </div>
      </Page>
    )
  }
}
