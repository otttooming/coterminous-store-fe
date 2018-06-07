import * as React from "react";
import Icon from "../../components/icon/Icon";
import { CartItemProps } from "../../common/products/typings";

type Props = CartItemProps & any;

const Quantity = (props: Props) => {
  const {
    input: { value, onChange },
    productSlug,
    variationId,
  } = props;
  const { quantity = 0 } = value;

  return (
    <div className="product-variations__cart addto">
      <div className="product-qty__wrap qty-block">
        <label className="qty-block__title">Quantity</label>
        <span className="qty-block__input input-text qty text">{quantity}</span>
      </div>

      <button
        className="button medium active"
        onClick={() =>
          onChange({
            productSlug,
            variationId,
            quantity: quantity + 1,
          })
        }
      >
        <Icon icon="cart-add" width={24} height={24} className="addto__icon" />
        Add to cart
      </button>
    </div>
  );
};

export default Quantity;
