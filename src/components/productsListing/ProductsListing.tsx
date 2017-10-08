import * as React from 'react';

interface Props {
  products: {}[];
}

interface ProductItemProps {
  name: string;
  slug: string;
  price_html: string;
  images?: {
    src: string;
  }[];
}

export default class ProductsListing extends React.Component<Props, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props as Props;

    const listProducts = products.map((item, index) => {
      const {
        name,
        slug,
        price_html,
        images,
       } = item as ProductItemProps;

      return (
        <li
          key={index}
          itemScope={true}
          itemType="http://schema.org/Product"
          className="col-xs-12 col-md-3 col-sm-6 products-listing__item"
        >
          <figure
            className="aspect-ratio"
            style={{ paddingBottom: '136.36363636364%' }}
          >
            <img
              width={220}
              height={300}
              className="aspect-ratio__img lazyloaded "
              alt="B Swish Bcute Classic Pearl"
              itemProp="image"
              src={images[0].src}
            />
          </figure>

          <a
            href={`/product/${slug}`}
            itemProp="url"
            className="products-listing__link"
          >
            <h3
              itemProp="name"
              className="products-listing__name"
            >
              {name}
            </h3>
          </a>
          <div className="products-listing__price-block">
            <span className="price__block">
              {price_html}
            </span>
          </div>
        </li>
      );
    });

    return (
      <ul className="row row--no-gutters products-listing">
        {listProducts}
      </ul>
    );
  }
}
