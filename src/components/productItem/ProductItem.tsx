import * as React from "react";
import Media from "../../components/media/Media";
import Variations from "./children/Variations";
import { PhotoSwipe } from "react-photoswipe";

function buildSingleProductVariation(props) {
  const variation = [
    {
      price: props.price,
      attributes: [
        {
          name: "",
          option: "",
        },
      ],
      name: "",
    },
  ];

  return variation;
}

function buildGalleryItems(images) {
  const slides = [];

  images.map((item, index) =>
    slides.push({
      src: !!item.media_details.sizes.large
        ? item.media_details.sizes.large.source_url
        : "",
      thumbs: !!item.media_details.sizes.thumbnail
        ? item.media_details.sizes.thumbnail.source_url
        : "",
      w: item.media_details.width,
      h: item.media_details.height,
    })
  );

  return slides;
}

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // gallery: buildGalleryItems(props.images),
      galleryOptions: {},
      isGalleryOpen: false,
    };
  }

  handleGalleryClose = () => {
    this.setState({ isGalleryOpen: false });
  };

  handleGalleryOpen = event => {
    event.preventDefault();
    this.setState({ isGalleryOpen: true });
  };

  render() {
    const thumbs = this.props.images;
    const productThumbs = thumbs.map((image, index) => (
      <Media
        key={index}
        image={image}
        className="product-thumb__link lightbox"
        title={this.props.product.title}
        handleClick={this.handleGalleryOpen}
      />
    ));

    const attributes = this.props.product.attributes;
    const productAttributes = attributes.map((attribute, index) => (
      <tr key={index}>
        <th>{attribute.name}</th>
        <td>
          <p>{attribute.options.map(option => option + " ")}</p>
        </td>
      </tr>
    ));

    const categories = this.props.product.categories;
    const productCategories = categories.map((category, index) => (
      <a key={index} href="#" rel="tag">
        {category.name}
      </a>
    ));

    const tags = this.props.product.tags;
    const productTags = tags.map((tag, index) => (
      <a key={index} href="#" rel="tag">
        {tag.name}
      </a>
    ));

    return (
      <div className="container">
        <PhotoSwipe
          isOpen={this.state.isGalleryOpen}
          items={this.state.gallery}
          options={this.state.galleryOptions}
          onClose={this.handleGalleryClose}
        />

        <div
          itemScope={true}
          itemType="http://schema.org/Product"
          className="row product"
        >
          <div className="col-xs-12 col-md-5 product__left-wrap">
            <Media
              image={this.props.images[0]}
              className="main-image product__main-image"
              handleClick={this.handleGalleryOpen}
            />

            <div
              className="product-thumb__gallery"
              itemScope={true}
              itemType="http://schema.org/ImageGallery"
            >
              {productThumbs}
            </div>
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="product__mainblock product_description_mainblock productcol summary">
              <h1 itemProp="name" className="product__title">
                {this.props.product.name}
              </h1>
              <div
                className="main-info product___price-wrap"
                itemProp="offers"
                itemScope={true}
                itemType="http://schema.org/Offer"
              >
                <link
                  itemProp="availability"
                  href="http://schema.org/InStock"
                />

                {this.props.in_stock && (
                  <div className="product-stock in-stock">
                    <span className="stock__header">Availability</span>{" "}
                    <span className="stock__number">In stock</span>
                  </div>
                )}

                <Variations
                  product={this.props.product}
                  variations={
                    this.props.variations.length > 0
                      ? this.props.variations
                      : buildSingleProductVariation(this.props.product)
                  }
                />
              </div>
            </div>
            <div className="product__details-wrap mt1">
              <div className="product__details-block">
                <h2 className="tab-title opened">Description</h2>
                <div
                  id="content_tab_1"
                  className="tab-content"
                  style={{ display: "block" }}
                  dangerouslySetInnerHTML={{
                    __html: this.props.product.description,
                  }}
                />
              </div>

              <div className="product__details-block">
                <h2 className="tab-title">Additional Information</h2>
                <div id="content_tab_2" className="tab-content">
                  <div className="product__attributes">
                    <table className="shop_attributes">
                      <tbody>{productAttributes}</tbody>
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
    );
  }
}
