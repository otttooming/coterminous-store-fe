import * as React from "react";
import Icon from "../../components/icon/Icon";
import { WrappedFieldProps } from "redux-form";

interface Props extends WrappedFieldProps {
  id: string;
  product: any;
  variations: any;
}

const Quantity = (props: Props) => {
  const { input: { value, onChange }, id, product, variations } = props;
  const { quantity = 0 } = value;

  const variation = product.variations.find((item: any) => item.id === id);

  return (
    <div className="product-variations__cart addto">
      <div className="product-qty__wrap qty-block">
        <label className="qty-block__title">Quantity</label>
        <span className="qty-block__input input-text qty text">{quantity}</span>
      </div>

      <button
        className="button medium active"
        onClick={() =>
          onChange({ id, quantity: quantity + 1, product, variations })}
      >
        <Icon icon="cart-add" width={24} height={24} className="addto__icon" />
        Add to cart
      </button>
    </div>
  );
};

export default Quantity;
