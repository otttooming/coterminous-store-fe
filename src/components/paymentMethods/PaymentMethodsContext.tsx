import * as React from 'react';
import 'isomorphic-unfetch';

import {
  getPaymentMethods,
  PaymentMethods,
} from '../../services/paymentMethodsApi/paymentMethodsApi';

const PaymentMethodsDefaultValue: PaymentMethodsProviderState = {
  paymentMethods: null,
};

export const PaymentMethodsContext = React.createContext(
  PaymentMethodsDefaultValue,
);

export interface PaymentMethodsProviderProps {}
export interface PaymentMethodsProviderState {
  paymentMethods?: PaymentMethods;
}

export class PaymentMethodsProvider extends React.Component<
  PaymentMethodsProviderProps,
  PaymentMethodsProviderState
> {
  constructor(props: PaymentMethodsProviderProps) {
    super(props);
  }

  async componentDidMount() {
    const response = await getPaymentMethods();

    this.setState({ ...response });
  }

  render() {
    return (
      <PaymentMethodsContext.Provider value={this.state}>
        {this.props.children}
      </PaymentMethodsContext.Provider>
    );
  }
}
