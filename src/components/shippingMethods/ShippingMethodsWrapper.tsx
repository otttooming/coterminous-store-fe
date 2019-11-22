import * as React from 'react';
import ShippingMethods from './ShippingMethods';
import {
  ShippingMethodsContext,
  ShippingMethodsProvider,
  ShippingMethodsProviderState,
} from './ShippingMethodsContext';

interface ShippingMethodWrapperProps {}

const ShippingMethodWrapper = (props: ShippingMethodWrapperProps) => {
  return (
    <ShippingMethodsProvider>
      <ShippingMethodsContext.Consumer>
        {value => (
          <ShippingMethods
            shippingLocations={!value ? undefined : value.shippingLocations}
          />
        )}
      </ShippingMethodsContext.Consumer>
    </ShippingMethodsProvider>
  );
};

export default ShippingMethodWrapper;
