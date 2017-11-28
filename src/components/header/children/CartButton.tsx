import * as React from "react";
import Icon from "../../../components/icon/Icon";
import { LOCATION_TYPES, CART_SLUGS } from "../../../common/products/constants";
import { LocationChangeProps } from "../../../common/products/typings";

interface Props {
  formValues: any;
  onLocationChange?: (props: LocationChangeProps) => void;
}

const CartButton = ({ formValues, onLocationChange }: Props) => {
  const amount =
    !!formValues &&
    Object.values(formValues.products)
      .map(
        item =>
          parseFloat(
            item.variations.find(idItem => idItem.id === item.id).price
          ) * item.quantity
      )
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  return (
    <a
      className="cart-links amount"
      href="/cart"
      title="View your shopping cart"
      onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onLocationChange({
          type: LOCATION_TYPES.PAGE,
          location: CART_SLUGS.DEFAULT,
        });
      }}
    >
      <Icon icon="cart" width={32} height={32} className="cart-links__icon" />
      <span className="cart-links__title">Cart</span>
      <span className="cart-links__amount"> {!!amount ? amount : "0"}€</span>
    </a>
  );
};

export default CartButton;
