import * as React from 'react';
import 'isomorphic-unfetch';

import {
  ShippingLocations,
  ShippingProps,
  getShippingMethods,
} from '../../services/shippingApi/shippingApi';

const ShippingMethodsDefaultValue: ShippingMethodsProviderState = {
  shippingLocations: null,
};

export const ShippingMethodsContext = React.createContext(
  ShippingMethodsDefaultValue,
);

export interface ShippingMethodsProviderProps {}
export interface ShippingMethodsProviderState {
  shippingLocations?: ShippingLocations;
}

export class ShippingMethodsProvider extends React.Component<
  ShippingMethodsProviderProps,
  ShippingMethodsProviderState
> {
  constructor(props: ShippingMethodsProviderProps) {
    super(props);
  }

  async componentDidMount() {
    const response = await getShippingMethods();

    this.setState({ ...response });
  }

  render() {
    return (
      <ShippingMethodsContext.Provider value={this.state}>
        {this.props.children}
      </ShippingMethodsContext.Provider>
    );
  }
}
