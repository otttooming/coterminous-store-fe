import * as React from 'react';
import { PaymentMethods } from '../../services/paymentMethodsApi/paymentMethodsApi';
import { Section, Heading, RadioButtonField } from '@coterminous/ui-lib';

interface PaymentMethodsProps {
  paymentMethods: PaymentMethods | undefined;
}

const PaymentMethodsInternal = (props: PaymentMethodsProps) => {
  const { paymentMethods } = props;

  return !paymentMethods ? null : (
    <Section>
      <Heading as="h1">Payment</Heading>

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
