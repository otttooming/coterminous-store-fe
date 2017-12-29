import * as React from "react";
import { Field } from "redux-form";

import BillingFields from "./children/BillingFields";
import ShippingFields from "./children/ShippingFields";

import ShippingMethods from "./children/ShippingMethods";

import TermsOfService from "./children/TermsOfService";
import Submit from "./children/Submit";
import AdditionalInformation from "./children/AdditionalInformation";

const ContactForm = ({ handleSubmit, paymentGateways, shippingMethods }) => {
  return (
    <form name="checkout" id="contact-form" onSubmit={handleSubmit}>
      <BillingFields />

      <AdditionalInformation />

      <ShippingFields />

      {/* <PaymentGateways paymentGateways={paymentGateways} /> */}

      {/* <ShippingMethods shippingMethods={shippingMethods} /> */}

      <TermsOfService />

      <Submit />
    </form>
  );
};

export default ContactForm;
