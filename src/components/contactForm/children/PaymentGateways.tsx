import * as React from "react";
import { Field } from "redux-form";
import { Section } from "coterminous-styled";

const PaymentGateways = (props: any) => {
  const listPaymentGateways = props.paymentGateways.map(
    (item: any, index: number) => {
      if (!!item.enabled) {
        return (
          <li key={index} className="wc_payment_method payment_method_bacs">
            {/* <input id="payment_method_bacs" type="radio" className="input-radio" name="payment_method" defaultValue="bacs" defaultChecked="checked" data-order_button_text /> */}
            <Field
              name="payment_method"
              component="input"
              type="radio"
              value={item.id}
            />

            <label htmlFor="payment_method_bacs">
              {!!item.method_title ? item.method_title : item.id}
            </label>
            {!!item.description && (
              <div className="payment_box payment_method_bacs">
                <p>{item.description}</p>
              </div>
            )}
          </li>
        );
      }
    }
  );

  return (
    <Section>
      <h2>Pay</h2>
      <ul className="wc_payment_methods payment_methods methods list-style-none">
        {listPaymentGateways}
      </ul>
    </Section>
  );
};

export default PaymentGateways;
