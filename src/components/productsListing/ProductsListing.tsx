import * as React from "react";
import { MediaItemProps } from "../../services/mediaApi/mediaApi";
import Media from "../../components/media/Media";

interface Props {
  products: ProductListingProps[];
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

const ProductsListing = ({ products }: Props) => {
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
        {!!images[0] && (
          <Media
            image={images[0]}
            className="main-image product__main-image"
            alt={name}
          />
        )}
        <a
          href={`/product/${slug}`}
          itemProp="url"
          className="products-listing__link"
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
