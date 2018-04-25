import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { FormSectionFieldset } from "../../common/styles/fieldset";
import { PaymentMethods } from "../../services/paymentMethodsApi/paymentMethodsApi";

interface PaymentMethodsProps {
  paymentMethods: PaymentMethods | undefined;
}

const PaymentMethodsInternal = (props: PaymentMethodsProps) => {
  const { paymentMethods } = props;

  return !paymentMethods ? null : (
    <FormSectionFieldset>
      <h2>Shipping</h2>
      <ul className="list-style-none">
        {paymentMethods.swedbank && (
          <li>
            <h3>{paymentMethods.swedbank.title}</h3>
            <Field
              name="payment_method"
              component="input"
              type="radio"
              value={paymentMethods.swedbank.title}
            />
          </li>
        )}

        {paymentMethods.seb && (
          <li>
            <h3>{paymentMethods.seb.title}</h3>
            <Field
              name="payment_method"
              component="input"
              type="radio"
              value={paymentMethods.seb.title}
            />
          </li>
        )}
      </ul>
    </FormSectionFieldset>
  );
};

export default PaymentMethodsInternal;