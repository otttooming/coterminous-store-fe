import * as React from "react";
import { Field } from "redux-form";

import BillingFields from "./children/BillingFields";
import ShippingFields from "./children/ShippingFields";

const ContactForm = ({ handleSubmit, paymentGateways, shippingMethods }) => {
  return (
    <form name="checkout" id="contact-form" onSubmit={handleSubmit}>
      <div className="woocommerce">
        <div className="woocommerce-info">
          Have a coupon?{" "}
          <a href="#" className="showcoupon mb1">
            Click here to enter your code
          </a>
        </div>
        <div
          className="bg__common mb1 p1 checkout_coupon"
          style={{ display: "block" }}
        >
          <p className="form-row form-row-first">
            <input
              type="text"
              name="coupon_code"
              className="input-text"
              placeholder="Coupon code"
              id="coupon_code"
            />
            <input
              type="submit"
              className="button"
              name="apply_coupon"
              defaultValue="Apply Coupon"
            />
          </p>
        </div>
        <div className="checkout woocommerce-checkout">
          <div className="col2-set bg__common mb1" id="customer_details">
            <div className="col-1">
              <BillingFields />
            </div>
            <div className="col-2">
              <ShippingFields />

              <div className="wc-order-comments">
                <h2>Additional Information</h2>
                <p
                  className="form-row form-row notes"
                  id="order_comments_field"
                >
                  <label htmlFor="order_comments">Order Notes</label>
                  <textarea
                    name="order_comments"
                    className="input-text "
                    id="order_comments"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    rows={2}
                    cols={5}
                    defaultValue={""}
                  />
                </p>
              </div>
            </div>
          </div>
          <div id="order_review" className="woocommerce-checkout-review-order">
            <div className="bg__common p1 mb1">
              <h2 id="order_review_heading">Your order</h2>
              <table className="shop_table checkout_cart table woocommerce-checkout-review-order-table mb1">
                <thead className="cart__form-head">
                  <tr>
                    <th className="product-name">Product</th>
                    <th className="product-total">Total</th>
                  </tr>
                </thead>
                <tbody className="cart__form-body">
                  <tr className="cart_item">
                    <td className="cart__product-name">
                      <a
                        href="https://www.aadliaare.ee/en/pood/devil-sticks-handcuffs/"
                        className="cart__thumbnail"
                      >
                        <img
                          width={73}
                          height={100}
                          className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image lazyloaded"
                          sizes="(max-width: 73px) 100vw, 73px"
                          data-src="https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-73x100.jpg"
                          data-srcset="https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1.jpg 1135w"
                          srcSet="https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1.jpg 1135w"
                          src="https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-73x100.jpg"
                        />
                      </a>
                      <a href="https://www.aadliaare.ee/en/pood/devil-sticks-handcuffs/">
                        Devil Sticks Handcuffs
                      </a>
                      <dl className="variation">
                        <dt className="variation-Color">Color:</dt>
                        <dd className="variation-Color">
                          <p>Red</p>
                        </dd>
                      </dl>
                      x1{" "}
                    </td>
                    <td className="product-total">
                      <span className="price__block">25€</span>{" "}
                    </td>
                  </tr>
                </tbody>
                <tfoot className="cart__form-footer">
                  <tr className="cart-subtotal">
                    <th>Subtotal</th>
                    <td className="right-align">
                      <span className="price__block">25€</span>
                    </td>
                  </tr>
                  <tr className="shipping">
                    <th>Shipping</th>
                    <td data-title="Shipping" />
                  </tr>

                  <tr className="order-total">
                    <th>Order Total</th>
                    <td className="right-align">
                      <strong>
                        <span className="price__block">
                          {/* {props.totalAmount}€ */}
                        </span>
                      </strong>{" "}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="bg__common p1 mb1">
              <h2 className="mb1">Shipping</h2>

              {/* <ShippingMethods shippingMethods={shippingMethods} /> */}
            </div>

            <div className="bg__common p1 mb1">
              <div id="payment" className="woocommerce-checkout-payment">
                <h2 className="mb1">Pay</h2>

                {/* <PaymentGateways paymentGateways={paymentGateways} /> */}

                <hr />
                <div className="form-row place-order">
                  <p className="form-row terms wc-terms-and-conditions">
                    <label>
                      <Field
                        name="terms"
                        component="input"
                        type="checkbox"
                        value="terms"
                        required={true}
                      />{" "}
                      I’ve read and accept the{" "}
                      <a
                        href="https://www.aadliaare.ee/en/info/kasutustingimused/"
                        target="_blank"
                      >
                        terms &amp; conditions
                      </a>
                    </label>
                  </p>
                  <input
                    type="submit"
                    className="button big"
                    name="woocommerce_checkout_place_order"
                    id="place_order"
                    defaultValue="Place order"
                    data-value="Place order"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
