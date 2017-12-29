import * as React from "react";
import { Field } from "redux-form";

import { Fieldset } from "../styles/fieldset";

const BillingFields = () => {
  return (
    <Fieldset>
      <h2>Billing Address</h2>
      <div>
        <label htmlFor="first_name">First Name</label>
        <Field
          name="contacts.billing.first_name"
          component="input"
          type="text"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <Field
          name="contacts.billing.last_name"
          component="input"
          type="text"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="contacts.billing.email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <Field
          name="contacts.billing.phone"
          component="input"
          type="text"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <Field
          name="contacts.billing.country"
          component="select"
          defaultValue="estonia"
          value="estonia"
        >
          <option value="estonia">Estonia</option>
        </Field>
      </div>
      <div>
        <label htmlFor="address_1">Address</label>
        <Field
          name="contacts.billing.address_1"
          component="input"
          type="text"
          required={true}
        />
      </div>
      <div>
        <Field
          name="contacts.billing.address_2"
          component="input"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="postcode">Postcode / ZIP</label>
        <Field
          name="contacts.billing.postcode"
          component="input"
          type="text"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="city">Town / City</label>
        <Field
          name="contacts.billing.city"
          component="input"
          type="text"
          required={true}
        />
      </div>
    </Fieldset>
  );
};

export default BillingFields;
