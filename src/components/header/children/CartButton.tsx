import * as React from "react";
import Icon from "../../../components/icon/Icon";

interface Props {
  amount?: number;
}

const CartButton = ({ amount }: Props) => {
  return (
    <a
      className="cart-links amount"
      href="/cart"
      title="View your shopping cart"
    >
      <Icon icon="cart" width={32} height={32} className="cart-links__icon" />
      <span className="cart-links__title">Cart</span>
      <span className="cart-links__amount"> {!!amount ? amount : "0"}€</span>
    </a>
  );
};

export default CartButton;
