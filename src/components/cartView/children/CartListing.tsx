import * as React from "react";

interface Props {
  formValues: any;
}

const CartListing = ({ formValues }: Props) => {
  const listCartItems = formValues.map((item: any) => (
    <tr className="cart_table_item">
      {/* The thumbnail */}
      <td className="cart__thumbnail cart_del_column visible-desktop">
        <a href="https://www.aadliaare.ee/en/pood/devil-sticks-handcuffs/">
          {item !== null &&
            !!item.image && (
              <img
                width={73}
                height={100}
                className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image lazyloaded"
                sizes="(max-width: 73px) 100vw, 73px"
                src={item !== null && !!item.image ? item.image.src : ""}
              />
            )}
        </a>
      </td>
      {/* Product Name */}
      <td className="product-name">
        <a href="https://www.aadliaare.ee/en/pood/devil-sticks-handcuffs/">
          {item !== null && !!item.name ? item.name : ""}
        </a>
        <dl className="variation">
          <dt className="variation-Color">Color:</dt>
          <dd className="variation-Color">
            <p>Red</p>
          </dd>
        </dl>
      </td>
      {/* Product price */}
      <td className="product-price cart_del_column">
        <span className="price__block">
          {item !== null && !!item.price ? `${item.price}€` : ""}
        </span>{" "}
      </td>
      {/* Quantity inputs */}
      <td className="product-quantity" id="cart-quantity">
        <div className="qty-block quantity">
          <input
            name="cart[a23ace9d76faf5405d7cbf121471ecb6][qty]"
            type="number"
            data-min="1"
            data-max="4"
            defaultValue="1"
            size={4}
            title="Qty"
            className="input-text qty text"
            maxLength={12}
          />
        </div>{" "}
      </td>
      {/* Product subtotal */}
      <td className="product-subtotal">
        <span className="price__block">25€</span>{" "}
      </td>
      {/* Remove from cart link */}
      <td className="product-remove cart_del_column">
        <a href="#" className="delete-btn" title="Remove this item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 149.337 149.337"
          >
            <path
              fill="currentColor"
              d="M149.337 143.96L80.044 74.668l69.292-69.292L143.96 0 74.668 69.292 5.378 0 0 5.376l69.292 69.292L0 143.96l5.376 5.376 69.292-69.292 69.293 69.292z"
            />
          </svg>
        </a>{" "}
      </td>
    </tr>
  ));

  return <tbody className="cart__form-body">{listCartItems}</tbody>;
};

export default CartListing;
