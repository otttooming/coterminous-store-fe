import * as React from "react";
import DropdownMenu from "../../components/DropdownMenu";
import { ShippingLocations } from "../../services/shippingApi/shippingApi";
import { Section, Heading } from "coterminous-styled";

interface ShippingMethodsProps {
  shippingLocations: ShippingLocations | undefined;
}

const ShippingMethodInternal = (props: ShippingMethodsProps) => {
  const { shippingLocations } = props;

  return !shippingLocations ? null : (
    <Section>
      <Heading.H1>Shipping</Heading.H1>

      <ul className="list-style-none">
        {shippingLocations.omniva && (
          <li>
            <h3>Omniva</h3>
            {/* <Field
              name="shipping_method_location"
              component={DropdownMenu}
              options={shippingLocations.omniva}
              className="shipping_method"
            /> */}
          </li>
        )}

        {shippingLocations.smartpost && (
          <li>
            <h3>SmartPost</h3>
            {/* <Field
              name="shipping_method_location"
              component={DropdownMenu}
              options={shippingLocations.smartpost}
              className="shipping_method"
            /> */}
          </li>
        )}
      </ul>
    </Section>
  );
};

export default ShippingMethodInternal;
