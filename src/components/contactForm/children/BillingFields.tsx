import * as React from "react";
import { Field } from "redux-form";
import { FormSection, Fieldset } from "../styles/fieldset";

const BillingFields = () => {
  return (
    <FormSection>
      <h2>Billing Address</h2>

      <Fieldset>
        <label htmlFor="first_name">First Name</label>
        <Field
          id="first_name"
          name="contacts.billing.first_name"
          component="input"
          type="text"
          required={true}
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="last_name">Last Name</label>
        <Field
          id="last_name"
          name="contacts.billing.last_name"
          component="input"
          type="text"
          required={true}
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="contacts.billing.email"
          component="input"
          type="text"
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="phone">Phone</label>
        <Field
          id="phone"
          name="contacts.billing.phone"
          component="input"
          type="text"
          required={true}
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="country">Country</label>
        <Field
          id="country"
          name="contacts.billing.country"
          component="select"
          defaultValue="estonia"
          value="estonia"
        >
          <option value="estonia">Estonia</option>
        </Field>
      </Fieldset>

      <Fieldset>
        <label htmlFor="address_1">Address</label>
        <Field
          id="address_1"
          name="contacts.billing.address_1"
          component="input"
          type="text"
          required={true}
        />
      </Fieldset>

      <Fieldset>
        <Field
          name="contacts.billing.address_2"
          component="input"
          type="text"
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="postcode">Postcode / ZIP</label>
        <Field
          id="postcode"
          name="contacts.billing.postcode"
          component="input"
          type="text"
          required={true}
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="city">Town / City</label>
        <Field
          id="city"
          name="contacts.billing.city"
          component="input"
          type="text"
          required={true}
        />
      </Fieldset>
    </FormSection>
  );
};

export default BillingFields;
