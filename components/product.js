import React from 'react'
import Media from '../components/media'
import VariationItems from './variationitem'

class ProductVariations extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      product: props.product,
      variations: props.variations
    }
  }

  render() {

    return (
      <div>
        <VariationItems variations={this.props.variations} />
      </div>
    )
  }
}

export default class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let thumbs = this.props.product.images
    let productThumbs = thumbs.map((image) =>
      <Media id={image.id} className='product-thumb__link lightbox' title={this.props.product.title} />
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
            <Media id={this.props.product.images[0].id} className='main-image product__main-image' />

            <div className="product-thumb__gallery" itemScope itemType="http://schema.org/ImageGallery">
              {productThumbs}
            </div>
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="product__mainblock product_description_mainblock productcol summary">
              <h1 itemProp="name" className="product__title">{this.props.product.name}</h1>
              <div className="main-info product___price-wrap" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                {this.props.product.price &&
                  <div itemProp="price" className="product__price-block product__price-block-big">
                    <span className="price__block">{this.props.product.price}</span>
                  </div>
                }

                <meta itemProp="price" content={60} />
                <meta itemProp="priceCurrency" content="EUR" />
                <link itemProp="availability" href="http://schema.org/InStock" />

                {this.props.in_stock &&
                  <div className="product-stock in-stock">
                    <span className="stock__header">Availability</span> <span className="stock__number">In stock</span>
                  </div>
                }

                <ProductVariations product={this.props.product} variations={this.props.variations} />
              </div>
            </div>
            <div className="product__details-wrap mt1">
              <div className="product__details-block">
                <h2 className="tab-title opened">
                  Description
                </h2>
                <div id="content_tab_1" className="tab-content" style={{ display: 'block' }} dangerouslySetInnerHTML={{ __html: this.props.product.description }}></div>
              </div>

              <div className="product__details-block">
                <h2 className="tab-title">
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
                <h2 className="posted-in__header">
                  Product categories
                </h2>
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
