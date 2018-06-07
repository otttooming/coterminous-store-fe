import * as React from "react";
import { PaymentMethods } from "../../services/paymentMethodsApi/paymentMethodsApi";
import { Section, Heading } from "coterminous-styled";

interface PaymentMethodsProps {
  paymentMethods: PaymentMethods | undefined;
}

const PaymentMethodsInternal = (props: PaymentMethodsProps) => {
  const { paymentMethods } = props;

  return !paymentMethods ? null : (
    <Section>
      <Heading.H1>Shipping</Heading.H1>

      <ul className="list-style-none">
        {paymentMethods.swedbank && (
          <li>
            <h3>{paymentMethods.swedbank.title}</h3>
            {/* <Field
              name="payment_method"
              component="input"
              type="radio"
              value={paymentMethods.swedbank.title}
            /> */}
          </li>
        )}

        {paymentMethods.seb && (
          <li>
            <h3>{paymentMethods.seb.title}</h3>
            {/* <Field
              name="payment_method"
              component="input"
              type="radio"
              value={paymentMethods.seb.title}
            /> */}
          </li>
        )}
      </ul>
    </Section>
  );
};

export default PaymentMethodsInternal;
