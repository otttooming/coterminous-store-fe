import * as React from "react";
import { Field, reduxForm } from "redux-form";
import {
  shippingOmnivaJSON,
  shippingSmartpostJSON,
} from "../../../components/apiShipping";
import DropdownMenu from "../../../components/DropdownMenu";

// getOmnivaShippingLocations($tmp, 'EE')
function getOmnivaShippingLocations(arr, local) {
  const stateNames = [
    ...new Set(
      arr.map(item => {
        if (item.A0_NAME === local) {
          return item.A1_NAME;
        } else {
          return "other";
        }
      })
    ),
  ].sort();
  const states = stateNames.map(item => {
    return { title: item, locations: [] };
  });

  const shippingLocations = states;

  function stateMap(location) {
    states.map((item, index) => {
      if (item.title === location.A1_NAME) {
        shippingLocations[index].locations.push({
          name: location.NAME,
          address: [
            location.A2_NAME,
            location.A3_NAME,
            location.A4_NAME,
            location.A5_NAME,
            location.A6_NAME,
            location.A7_NAME,
            location.A8_NAME,
          ]
            .filter(item => item !== "NULL")
            .join(", "),
          state: location.A1_NAME,
          service_hours: location.SERVICE_HOURS,
          raw: location,
        });
      }
    });
  }

  arr.map(location => {
    stateMap(location);
  });

  return shippingLocations;
}

// getSmartpostShippingLocations($tmp)
function getSmartpostShippingLocations(arr) {
  const stateNames = [
    ...new Set(
      arr.map(item => {
        return item.group_name;
      })
    ),
  ].sort();
  const states = stateNames.map(item => {
    return { title: item, locations: [] };
  });

  const shippingLocations = states;

  function stateMap(location) {
    states.map((item, index) => {
      if (item.title === location.group_name) {
        shippingLocations[index].locations.push({
          name: location.name,
          address: [location.city, location.address]
            .filter(item => item !== "NULL")
            .join(", "),
          state: location.group_name,
          service_hours: location.opened,
          raw: location,
        });
      }
    });
  }

  arr.map(location => {
    stateMap(location);
  });

  return shippingLocations;
}

const ShippingMethods = (props: any) => {
  const listShippingMethods = props.shippingMethods.map((item, index) => {
    return (
      <li key={index} className="wc_payment_method">
        <Field
          name="shipping_method"
          component="input"
          type="radio"
          value={item.id.toString(10)}
          className="shipping_method"
        />
        <label htmlFor="shipping_method">{item.title}</label>
        <div style={{ width: "100%" }}>
          {item.id === "desirees_smartpost_shipping_method" && (
            <Field
              name="shipping_method_location"
              component={DropdownMenu}
              options={getSmartpostShippingLocations(
                shippingSmartpostJSON,
                "EE"
              )}
              className="shipping_method"
            />
          )}
          {item.id === "desirees_omniva_shipping_method" && (
            <Field
              name="shipping_method_location"
              component={DropdownMenu}
              options={getOmnivaShippingLocations(shippingOmnivaJSON, "EE")}
              className="shipping_method"
            />
          )}
        </div>
      </li>
    );
  });

  return <ul className="list-style-none">{listShippingMethods}</ul>;
};

export default ShippingMethods;