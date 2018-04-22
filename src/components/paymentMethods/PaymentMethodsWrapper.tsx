import * as React from "react";
import PaymentMethods from "./PaymentMethods";
import {
  PaymentMethodsContext,
  PaymentMethodsProvider,
  PaymentMethodsProviderState,
} from "./PaymentMethodsContext";

interface PaymentMethodsWrapperProps {}

const PaymentMethodsWrapper = (props: PaymentMethodsWrapperProps) => {
  return (
    <PaymentMethodsProvider>
      <PaymentMethodsContext.Consumer>
        {value => (
          <PaymentMethods
            paymentMethods={!value ? undefined : value.paymentMethods}
          />
        )}
      </PaymentMethodsContext.Consumer>
    </PaymentMethodsProvider>
  );
};

export default PaymentMethodsWrapper;
