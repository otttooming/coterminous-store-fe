import * as React from "react";
import Media from "../../../components/media";

function buildCartItem(product, variation) {
  const cartItem = {
    id: product.id,
    name: product.name,
    price: !!variation ? variation.price : product.price,
    image: !!variation ? variation.image : product.image[0],

    productObj: product,
    variationObj: variation,
  };

  return cartItem;
}

export default class Variations extends React.Component {
  constructor(props) {
    super(props);
  }

  addToCart = id => {
    this.props.addToCart(id);
  };

  removeFromCart = () => {
    this.props.removeFromCart("2");
  };

  render() {
    const items = this.props.variations.map((item, index) => (
      <div key={index} className="product-variations__item">
        <div className="description" />
        {!!item.attributes[0].name && (
          <div className="product-variations__attribute">
            <span>
              {item.attributes[0].name}: {item.attributes[0].option}
            </span>
          </div>
        )}
        <div className="product-variations__price ">
          <span className="price__block">{item.price}€</span>
        </div>
        <div className="form">
          <div className="product-variations__cart addto">
            <div className="product-qty__wrap qty-block" id="product-quantity">
              <label className="qty-block__title">Quantity</label>
              <input
                type="number"
                step="1"
                min="1"
                max="3"
                name="quantity"
                defaultValue="1"
                title="Qty"
                className="qty-block__input input-text qty text"
                size={4}
              />
            </div>
            <label
              className="button medium active"
              onClick={() =>
                this.addToCart(buildCartItem(this.props.product, item))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="addto__icon"
              >
                <path
                  d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"
                  fill="currentColor"
                />
              </svg>
              Add to cart
            </label>
          </div>
        </div>
      </div>
    ));

    return <div className="product-variations">{items}</div>;
  }
}
