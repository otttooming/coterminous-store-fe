import * as React from "react";
import { PaymentMethods } from "../../services/paymentMethodsApi/paymentMethodsApi";
import { Section, Heading, RadioButtonField } from "coterminous-styled";

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
            <RadioButtonField
              name="payment_method"
              label={null}
              inputLabel={paymentMethods.swedbank.title}
              value="swedbank"
            />
          </li>
        )}

        {paymentMethods.seb && (
          <li>
            <RadioButtonField
              name="payment_method"
              label={null}
              inputLabel={paymentMethods.seb.title}
              value="seb"
            />
          </li>
        )}
      </ul>
    </Section>
  );
};

export default PaymentMethodsInternal;
