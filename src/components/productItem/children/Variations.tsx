import * as React from "react";
import Icon from "../../../components/icon/Icon";
import styled from "styled-components";

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

const VariationItem = styled.li`
  list-style: none;
`;

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
    const { variations } = this.props;
    const items = variations.map(({ attributes, price }, index) => (
      <VariationItem key={index} className="product-variations__item">
        {!!attributes[0].name && (
          <ul className="product-variations__attribute">
            <li>
              {attributes[0].name}: {attributes[0].option}
            </li>
          </ul>
        )}
        {!!price && (
          <div className="product-variations__price ">
            <span className="price__block">{price}€</span>
          </div>
        )}
        <div className="product-variations__cart addto">
          <div className="product-qty__wrap qty-block">
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
          <button
            className="button medium active"
            onClick={() =>
              this.addToCart(buildCartItem(this.props.product, null))}
          >
            <Icon
              icon="cart-add"
              width={24}
              height={24}
              className="addto__icon"
            />
            Add to cart
          </button>
        </div>
      </VariationItem>
    ));

    return <ul className="product-variations">{items}</ul>;
  }
}
