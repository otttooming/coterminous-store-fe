import * as React from "react";
import { Field } from "redux-form";

import BillingFields from "./children/BillingFields";
import ShippingFields from "./children/ShippingFields";

import TermsOfService from "./children/TermsOfService";
import Submit from "./children/Submit";
import AdditionalInformation from "./children/AdditionalInformation";
import { LocationChangeProps } from "../../common/products/typings";
import ShippingMethods from "../../components/shippingMethods/ShippingMethodsWrapper";
import PaymentMethods from "../../components/paymentMethods/PaymentMethodsWrapper";

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

      <ShippingMethods />

      <PaymentMethods />

      <TermsOfService onLocationChange={onLocationChange} />

      <Submit />
    </form>
  );
};

export default ContactForm;
