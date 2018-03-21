import * as React from "react";
import Icon from "../../../components/icon/Icon";
import Link from "../../../components/link/Link";
import {
  LOCATION_TYPES,
  CHECKOUT_SLUGS,
} from "../../../common/products/constants";
import {
  LocationChangeProps,
  ShoppingCartPrice,
} from "../../../common/products/typings";

interface Props {
  onLocationChange?: (props: LocationChangeProps) => void;
  price: ShoppingCartPrice | undefined;
}

const CartButton = ({ onLocationChange, price }: Props) => {
  const total = !price ? 0 : price.total;
  return (
    <Link
      location={{ type: LOCATION_TYPES.PAGE, view: CHECKOUT_SLUGS.DEFAULT }}
      className="cart-links amount"
      onLocationChange={onLocationChange}
    >
      <Icon icon="cart" width={32} height={32} className="cart-links__icon" />
      <span className="cart-links__title">Cart</span>
      <span className="cart-links__amount"> {total}€</span>
    </Link>
  );
};

export default CartButton;
