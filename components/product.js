import React from 'react'

class VariationItems extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let items = this.props.variations.map((item) =>
      <div className="product-variations__item">
        <div className="description" />
        <div className="product-variations__attribute"><span>{item.attributes[0].name}: {item.attributes[0].option}</span></div>
        <div className="product-variations__price "><span className="price__block">{item.price}</span></div>
        <div className="form">
          <form className="product-variations__cart addto" action="https://www.aadliaare.ee/en/pood/pretty-love-uriah-vincent/" method="post" encType="multipart/form-data">
            <div className="product-qty__wrap qty-block" id="product-quantity">
              <label className="qty-block__title">Quantity</label>
              <input type="number" step={1} min={1} max={3} name="quantity" defaultValue={1} title="Qty" className="qty-block__input input-text qty text" size={4} />
            </div>
            <label className="button medium active">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="addto__icon"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" fill="currentColor" /></svg>
              <input type="submit" name defaultValue visibility="hidden" style={{ display: 'none' }} />
              Add to cart                      </label>
            <input type="hidden" name="attribute_pa_variant" defaultValue="uriah" />
            <input type="hidden" name="variation_id" defaultValue={20712} />
            <input type="hidden" name="product_id" defaultValue={20711} />
            <input type="hidden" name="add-to-cart" defaultValue={20711} />
          </form>
        </div>
      </div>
    );

    return (
      <div className="product-variations">{items}</div>
    );
  }
}

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
      <a className="product-thumb__link lightbox" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject" href="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg" data-size="1135x1550" data-pswp-uid={2}>
        <figure className="aspect-ratio" style={{ paddingBottom: '136.36363636364%' }}>
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
            src={image.src}
          />
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
              <figure className="aspect-ratio" style={{ paddingBottom: '136.58854166667%' }}><img width={768} height={1049} className="aspect-ratio__img lazyloaded " alt="Pretty Love Uriah / Vincent" itemProp="image" sizes="(max-width: 768px) 100vw, 768px"
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
                <div className="product-stock in-stock">
                  <span className="stock__header">Availability</span> <span className="stock__number">In stock</span>
                </div>

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
