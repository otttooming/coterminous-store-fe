import * as React from "react";
import { Field, reduxForm } from "redux-form";
import DropdownMenu from "../../components/DropdownMenu";

import { FormSectionFieldset } from "../../common/styles/fieldset";

import { ShippingLocations } from "../../services/shippingApi/shippingApi";

interface ShippingMethodsProps {
  shippingLocations: ShippingLocations | undefined;
}

const ShippingMethodInternal = (props: ShippingMethodsProps) => {
  const { shippingLocations } = props;

  return !shippingLocations ? null : (
    <FormSectionFieldset>
      <h2>Shipping</h2>
      <ul className="list-style-none">
        {shippingLocations.omniva && (
          <li>
            <h3>Omniva</h3>
            <Field
              name="shipping_method_location"
              component={DropdownMenu}
              options={shippingLocations.omniva}
              className="shipping_method"
            />
          </li>
        )}

        {shippingLocations.smartpost && (
          <li>
            <h3>SmartPost</h3>
            <Field
              name="shipping_method_location"
              component={DropdownMenu}
              options={shippingLocations.smartpost}
              className="shipping_method"
            />
          </li>
        )}
      </ul>
    </FormSectionFieldset>
  );
};

export default ShippingMethodInternal;
