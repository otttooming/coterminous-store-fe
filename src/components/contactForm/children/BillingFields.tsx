import * as React from "react";
import { TextInputField, Heading, Section } from "@coterminous/ui";

const BillingFields = () => {
  return (
    <Section>
      <Heading as="h2">Billing Address</Heading>

      <TextInputField.Input
        label="First name"
        name="billing_first_name"
        isRequired={true}
      />
      <TextInputField.Input
        label="Last name"
        name="billing_last_name"
        isRequired={true}
      />
      <TextInputField.Input label="Email" name="billing_email" />
      <TextInputField.Input
        label="Phone"
        name="billing_phone"
        isRequired={true}
      />
      <TextInputField.Input
        label="Country"
        name="billing_country"
        isRequired={true}
      />
      <TextInputField.Input label="Address" name="billing_address_1" />
      <TextInputField.Input
        label="Postcode / ZIP"
        name="billing_postcode"
        isRequired={true}
      />
      <TextInputField.Input
        label="Town / City"
        name="billing_city"
        isRequired={true}
      />
    </Section>
  );
};

export default BillingFields;
