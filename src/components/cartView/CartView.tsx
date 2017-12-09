import * as React from "react";
import CartListing from "./children/CartListing";
import Link from "../../components/link/Link";

import {
  LOCATION_TYPES,
  CHECKOUT_SLUGS,
} from "../../common/products/constants";
import { LocationChangeProps } from "../../common/products/typings";

interface Props {
  formValues?: any;
  onLocationChange?: (props: LocationChangeProps) => void;
}

const CartView = ({ formValues, onLocationChange }: Props) => {
  return (
    <div className="row">
      <div className="col-xs-12 grid_content with-sidebar-top cfx">
        <div className="woocommerce">
          <form
            action="https://www.aadliaare.ee/en/ostukorv/"
            method="post"
            className="cart__form bg__common p1 mb1"
          >
            <h2>Cart</h2>
            <table
              className="cart table checkout_cart"
              cellSpacing={0}
              style={{ marginBottom: 20 }}
            >
              <thead className="cart__form-head">
                <tr>
                  <th className="product-thumbnail cart_del_column visible-desktop">
                    &nbsp;
                  </th>
                  <th className="product-name">Product</th>
                  <th className="product-price cart_del_column">Price</th>
                  <th className="product-quantity">Qty</th>
                  <th className="product-subtotal">Total</th>
                  <th className="product-remove cart_del_column">&nbsp;</th>
                </tr>
              </thead>
              {!!formValues && (
                <CartListing formValues={Object.values(formValues.products)} />
              )}
            </table>
            <div className="mb1">
              <input
                type="submit"
                className="button update-button"
                name="update_cart"
                defaultValue="Update Cart"
              />
              <input
                type="hidden"
                id="_wpnonce"
                name="_wpnonce"
                defaultValue="8a921890b7"
              />
              <input
                type="hidden"
                name="_wp_http_referer"
                defaultValue="/en/ostukorv/"
              />
            </div>
            <hr />
            <div className="wc-proceed-to-checkout">
              <Link
                location={{
                  type: LOCATION_TYPES.PAGE,
                  view: CHECKOUT_SLUGS.DEFAULT,
                }}
                className="checkout-button button alt wc-forward"
                onLocationChange={onLocationChange}
              >
                Proceed to Checkout
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartView;
