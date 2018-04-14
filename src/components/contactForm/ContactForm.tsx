import * as React from "react";
import { Field } from "redux-form";

import BillingFields from "./children/BillingFields";
import ShippingFields from "./children/ShippingFields";

import ShippingMethods from "./children/ShippingMethods";

import TermsOfService from "./children/TermsOfService";
import Submit from "./children/Submit";
import AdditionalInformation from "./children/AdditionalInformation";
import { LocationChangeProps } from "../../common/products/typings";
import {
  ShippingMethodsContext,
  ShippingMethodsProvider,
  ShippingMethodsProviderState,
} from "../../components/shippingMethods/ShippingMethodsContext";

interface Props {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  paymentGateways?: any;
  shippingMethods?: any;
  onLocationChange: (props: LocationChangeProps) => void;
}
const ContactForm = ({
  handleSubmit,
  paymentGateways,
  shippingMethods,
  onLocationChange,
}: Props) => {
  return (
    <form name="checkout" onSubmit={handleSubmit}>
      <BillingFields />

      <AdditionalInformation />

      {/* <ShippingFields /> */}

      {/* <PaymentGateways paymentGateways={paymentGateways} /> */}

      <ShippingMethodsProvider>
        <ShippingMethodsContext.Consumer>
          {value => (
            <ShippingMethods
              shippingLocations={!value ? undefined : value.shippingLocations}
            />
          )}
        </ShippingMethodsContext.Consumer>
      </ShippingMethodsProvider>

      <TermsOfService onLocationChange={onLocationChange} />

      <Submit />
    </form>
  );
};

export default ContactForm;
