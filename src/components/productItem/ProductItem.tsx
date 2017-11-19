import * as React from "react";
import Media from "../../components/media/Media";
import Variations from "./children/Variations";
import Details from "./children/Details";
// import { PhotoSwipe } from "react-photoswipe";

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

interface Props {
  product: any;
  images: any;
  variations: any;
}

export default class ProductItem extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.state = {
      // gallery: buildGalleryItems(props.images),
      gallery: [],
      galleryOptions: {},
      isGalleryOpen: false,
    };
  }

  handleGalleryClose = () => {
    this.setState({ isGalleryOpen: false });
  };

  handleGalleryOpen = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.setState({ isGalleryOpen: true });
  };

  render() {
    const { images, product, variations } = this.props;
    const {
      attributes,
      categories,
      tags,
      name,
      description,
      in_stock,
    } = product;

    const isDetailsPopulated =
      !!attributes.length ||
      !!categories.length ||
      !!description ||
      !!tags.length;

    const productThumbs =
      !!images.length &&
      images.map((image, index) => (
        <Media
          key={index}
          image={image}
          className="product-thumb__link lightbox"
          alt={this.props.product.title}
          handleClick={this.handleGalleryOpen}
        />
      ));

    return (
      <div className="container">
        {/* <PhotoSwipe
          isOpen={this.state.isGalleryOpen}
          items={this.state.gallery}
          options={this.state.galleryOptions}
          onClose={this.handleGalleryClose}
        /> */}

        <div
          itemScope={true}
          itemType="http://schema.org/Product"
          className="row product"
        >
          <div className="col-xs-12 col-md-5 product__left-wrap">
            {!!images[0] ? (
              <Media
                image={images[0]}
                className="main-image product__main-image"
                handleClick={this.handleGalleryOpen}
                isProduct={true}
              />
            ) : (
              <Media
                className="main-image product__main-image"
                handleClick={this.handleGalleryOpen}
                isProduct={true}
              />
            )}
            {!!images.length && (
              <div
                className="product-thumb__gallery"
                itemScope={true}
                itemType="http://schema.org/ImageGallery"
              >
                {productThumbs}
              </div>
            )}
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="product__mainblock product_description_mainblock productcol summary">
              <h1 itemProp="name" className="product__title">
                {name}
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

                {in_stock && (
                  <div className="product-stock in-stock">
                    <span className="stock__header">Availability</span>{" "}
                    <span className="stock__number">In stock</span>
                  </div>
                )}

                <Variations product={product} variations={variations} />
              </div>
            </div>

            {isDetailsPopulated && (
              <Details
                attributes={attributes}
                categories={categories}
                description={description}
                tags={tags}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
