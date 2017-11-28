import * as React from "react";
import { Field } from "redux-form";

const BillingFields = () => {
  return (
    <div className="woocommerce-billing-fields">
      <h2>Billing Address</h2>
      <div>
        <label htmlFor="first_name">First Name</label>
        <Field
          name="first_name"
          component="input"
          type="text"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <Field name="last_name" component="input" type="text" required={true} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <Field name="phone" component="input" type="text" required={true} />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <Field
          name="country"
          component="select"
          defaultValue="estonia"
          value="estonia"
        >
          <option value="estonia">Estonia</option>
        </Field>
      </div>
      <div>
        <label htmlFor="address_1">Address</label>
        <Field name="address_1" component="input" type="text" required={true} />
      </div>
      <div>
        <Field name="address_2" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="postcode">Postcode / ZIP</label>
        <Field name="postcode" component="input" type="text" required={true} />
      </div>
      <div>
        <label htmlFor="city">Town / City</label>
        <Field name="city" component="input" type="text" required={true} />
      </div>
    </div>
  );
};

export default BillingFields;
