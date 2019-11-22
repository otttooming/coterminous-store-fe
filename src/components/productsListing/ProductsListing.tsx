import * as React from 'react';
import { MediaItemProps } from '../../services/mediaApi/mediaApi';
import Media from '../../components/media/Media';
import Link from '../../components/link/Link';
import {
  LOCATION_TYPES,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
} from '../../common/products/constants';
import {
  LocationChangeProps,
  ProductProps,
} from '../../common/products/typings';

interface Props {
  products: ProductProps[];
  onLocationChange?: (props: LocationChangeProps) => void;
}

const ProductsListing = ({ products, onLocationChange }: Props) => {
  if (!products) {
    return null;
  }

  const listProducts = products.map((item, index) => {
    const { name, slug, price, price_html } = item.product;

    const { images } = item;

    return (
      <li
        key={index}
        itemScope={true}
        itemType="http://schema.org/Product"
        className="col-xs-12 col-md-3 col-sm-6 products-listing__item"
      >
        {!!images[0] ? (
          <Media
            image={images[0]}
            className="main-image product__main-image"
            alt={name}
            sizes={[
              { size: '100vw', mediaCondition: '(max-width: 30em)' },
              { size: '50vw', mediaCondition: '(max-width: 50em)' },
              { size: 'calc(33vw - 100px)' },
            ]}
          />
        ) : (
          <Media className="main-image product__main-image" alt={name} />
        )}

        <Link
          location={{
            type: LOCATION_TYPES.PAGE,
            view: PRODUCT_SLUGS.DEFAULT,
            pathName: [slug],
          }}
          className="products-listing__link"
          seo={{ itemProp: 'url' }}
          onLocationChange={onLocationChange}
        >
          <h3 itemProp="name" className="products-listing__name">
            {name}
          </h3>
        </Link>

        {!!price && (
          <div
            className="products-listing__price-block"
            dangerouslySetInnerHTML={{ __html: price_html }}
          />
        )}
      </li>
    );
  });

  return (
    <ul className="row row--no-gutters products-listing">{listProducts}</ul>
  );
};

export default ProductsListing;
