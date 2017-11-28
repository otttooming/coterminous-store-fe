import * as React from "react";
import {
  LOCATION_TYPES,
  CHECKOUT_SLUGS,
} from "../../common/products/constants";
import { LocationChangeProps } from "../../common/products/typings";

import ContactForm from "../contactForm/ContactForm";

interface Props {
  formValues?: any;
  onLocationChange?: (props: LocationChangeProps) => void;
}

const CheckoutView = ({ formValues, onLocationChange }: Props) => {
  return <ContactForm />;
};

export default CheckoutView;
