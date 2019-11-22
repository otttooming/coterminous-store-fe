import * as React from 'react';
import { Section, Heading, CheckboxField } from '@coterminous/ui-lib';

const PaymentGateways = (props: any) => {
  const listPaymentGateways = props.paymentGateways.map(
    (item: any, index: number) => {
      if (!!item.enabled) {
        return (
          <li key={index} className="wc_payment_method payment_method_bacs">
            {/* <input id="payment_method_bacs" type="radio" className="input-radio" name="payment_method" defaultValue="bacs" defaultChecked="checked" data-order_button_text /> */}

            <CheckboxField
              name="payment_method"
              inputLabel="Payment method"
              label="label"
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
    },
  );

  return (
    <Section>
      <Heading as="h1">Pay</Heading>

      <ul className="wc_payment_methods payment_methods methods list-style-none">
        {listPaymentGateways}
      </ul>
    </Section>
  );
};

export default PaymentGateways;
