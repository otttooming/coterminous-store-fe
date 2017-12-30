import * as React from "react";
import { Field } from "redux-form";

import { FormSectionFieldset } from "../styles/fieldset";

const ShippingFields = () => {
  return (
    <FormSectionFieldset>
      <h3 id="ship-to-different-address">
        <label
          htmlFor="ship-to-different-address-checkbox"
          className="checkbox"
        >
          Ship to a different address?
        </label>
        <input
          id="ship-to-different-address-checkbox"
          className="input-checkbox"
          type="checkbox"
          name="ship_to_different_address"
          defaultValue="1"
        />
      </h3>
      <div className="shipping_address" style={{ display: "none" }}>
        <p
          className="form-row form-row form-row-first validate-required"
          id="shipping_first_name_field"
        >
          <label htmlFor="shipping_first_name">
            First Name{" "}
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <input
            type="text"
            className="input-text "
            name="shipping_first_name"
            id="shipping_first_name"
            autoComplete="given-name"
          />
        </p>
        <p
          className="form-row form-row form-row-last validate-required"
          id="shipping_last_name_field"
        >
          <label htmlFor="shipping_last_name">
            Last Name{" "}
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <input
            type="text"
            className="input-text "
            name="shipping_last_name"
            id="shipping_last_name"
            autoComplete="family-name"
          />
        </p>
        <div className="clear" />
        <p
          className="form-row form-row form-row-wide address-field update_totals_on_change validate-required"
          id="shipping_country_field"
        >
          <label htmlFor="shipping_country">
            Country{" "}
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <strong>Estonia</strong>
          <input
            type="hidden"
            name="shipping_country"
            id="shipping_country"
            defaultValue="EE"
            className="country_to_state"
          />
        </p>
        <p
          className="form-row form-row form-row-wide address-field validate-required"
          id="shipping_address_1_field"
        >
          <label htmlFor="shipping_address_1">
            Address{" "}
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <input
            type="text"
            className="input-text "
            name="shipping_address_1"
            id="shipping_address_1"
            placeholder="Street address"
            autoComplete="address-line1"
          />
        </p>
        <p
          className="form-row form-row form-row-wide address-field"
          id="shipping_address_2_field"
        >
          <input
            type="text"
            className="input-text "
            name="shipping_address_2"
            id="shipping_address_2"
            placeholder="Apartment, suite, unit etc. (optional)"
            autoComplete="address-line2"
          />
        </p>
        <p
          className="form-row form-row address-field validate-required validate-postcode form-row-first"
          id="shipping_postcode_field"
          data-o_class="form-row form-row form-row-last address-field validate-required validate-postcode"
        >
          <label htmlFor="shipping_postcode">
            Postcode / ZIP{" "}
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <input
            type="text"
            className="input-text "
            name="shipping_postcode"
            id="shipping_postcode"
            autoComplete="postal-code"
          />
        </p>
        <p
          className="form-row form-row address-field validate-required form-row-last"
          id="shipping_city_field"
          data-o_class="form-row form-row form-row-wide address-field validate-required"
        >
          <label htmlFor="shipping_city">
            Town / City{" "}
            <abbr className="required" title="required">
              *
            </abbr>
          </label>
          <input
            type="text"
            className="input-text "
            name="shipping_city"
            id="shipping_city"
            autoComplete="address-level2"
          />
        </p>
        <p
          className="form-row form-row address-field validate-state form-row-first"
          id="shipping_state_field"
          style={{ display: "none" }}
          data-o_class="form-row form-row form-row-first address-field validate-state"
        >
          <label htmlFor="shipping_state">State / County</label>
          <input
            type="hidden"
            className="hidden"
            name="shipping_state"
            id="shipping_state"
          />
        </p>
        <div className="clear" />
      </div>
    </FormSectionFieldset>
  );
};

export default ShippingFields;
