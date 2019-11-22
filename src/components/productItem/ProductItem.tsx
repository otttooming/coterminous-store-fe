import * as React from 'react';
import Media from '../../components/media/Media';
import { MediaItemProps } from '../../services/mediaApi/mediaApi';
import Variations from './children/Variations';
import Details from './children/Details';
import Gallery from './children/Gallery';
import { Lightbox, Image } from '@coterminous/ui-lib';
import { ProductTemplateImages } from '../../generated-models';

interface Props {
  product: any;
  images: ProductTemplateImages[];
  variations: any;
}

export default class ProductItem extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.state = {
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
    const { images = [], product, variations } = this.props;
    const {
      attributes,
      categories,
      tags,
      name,
      description,
      in_stock,
    } = product;

    const isDetailsPopulated =
      Array.isArray(attributes) ||
      Array.isArray(categories) ||
      !!description ||
      Array.isArray(tags);

    return (
      <div className="container container--no-gutters">
        <Lightbox
          isOpen={this.state.isGalleryOpen}
          images={images}
          onClose={this.handleGalleryClose}
        />

        <div
          itemScope={true}
          itemType="http://schema.org/Product"
          className="row product"
        >
          <div className="col-xs-12 col-md-5 product__left-wrap">
            <Image
              image={images[0]}
              onClick={this.handleGalleryOpen}
              isProduct={true}
            />
            {/* {!!images && images.length !== 1 && (
              <Gallery images={images} alt={name} />
            )} */}
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
                    <span className="stock__header">Availability</span>{' '}
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
