import * as React from "react";
import { TextInput } from "coterminous-styled/dist/components/Form/TextInput/TextInput";
import { TextInputField, Heading, Section } from "coterminous-styled";

const BillingFields = () => {
  return (
    <Section>
      <Heading.H2>Billing Address</Heading.H2>

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
