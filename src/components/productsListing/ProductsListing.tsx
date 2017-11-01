import * as React from "react";
import Media from "../../components/media/Media";

interface Props {
  products: {}[];
}

interface ProductItemProps {
  name: string;
  slug: string;
  price: number;
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
        price,
        price_html,
      } = item.product as ProductItemProps;

      const { images } = item;

      return (
        <li
          key={index}
          itemScope={true}
          itemType="http://schema.org/Product"
          className="col-xs-12 col-md-3 col-sm-6 products-listing__item"
        >
          {/* <figure
            className="aspect-ratio"
            style={{ paddingBottom: "136.36363636364%" }}
          >
            <img
              width={220}
              height={300}
              className="aspect-ratio__img lazyloaded "
              alt="B Swish Bcute Classic Pearl"
              itemProp="image"
              src={images[0].src}
            />
          </figure> */}
          {!!images[0] && (
            <Media
              image={images[0]}
              className="main-image product__main-image"
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
                dangerouslySetInnerHTML={{
                  __html: price_html,
                }}
              />
            </div>
          )}
        </li>
      );
    });

    return (
      <ul className="row row--no-gutters products-listing">{listProducts}</ul>
    );
  }
}
