import * as React from "react";
import { MediaItemProps } from "../../services/mediaApi/mediaApi";
import Media from "../../components/media/Media";
import {
  LOCATION_TYPES,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
} from "../../common/products/constants";
import { LocationChangeProps } from "../../common/products/typings";

interface Props {
  products: ProductListingProps[];
  onLocationChange?: (props: LocationChangeProps) => void;
}

interface ProductListingProps {
  product: ProductItemProps;
  images?: MediaItemProps[];
}

interface ProductItemProps {
  name: string;
  slug: string;
  price: number;
  price_html: string;
}

const ProductsListing = ({ products, onLocationChange }: Props) => {
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
          />
        ) : (
          <Media className="main-image product__main-image" alt={name} />
        )}
        <a
          href={`/product/${slug}`}
          itemProp="url"
          className="products-listing__link"
          onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            onLocationChange({
              type: LOCATION_TYPES.PAGE,
              location: PRODUCT_SLUGS.DEFAULT,
              query: {
                slug,
              },
            });
          }}
        >
          <h3 itemProp="name" className="products-listing__name">
            {name}
          </h3>
        </a>
        {!!price && (
          <div className="products-listing__price-block">
            <span
              className="price__block"
              dangerouslySetInnerHTML={{ __html: price_html }}
            />
          </div>
        )}
      </li>
    );
  });

  return (
    <ul className="row row--no-gutters products-listing">{listProducts}</ul>
  );
};

export default ProductsListing;
