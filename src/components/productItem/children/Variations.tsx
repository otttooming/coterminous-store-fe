import * as React from "react";
import Icon from "../../../components/icon/Icon";

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
              <Icon
                icon="cart-add"
                width={24}
                height={24}
                className="addto__icon"
              />
              Add to cart
            </label>
          </div>
        </div>
      </div>
    ));

    return <div className="product-variations">{items}</div>;
  }
}
