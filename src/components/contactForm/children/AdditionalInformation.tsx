import * as React from "react";
import { Section, Heading, TextInputField } from "coterminous-styled";

const AdditionalInformation = () => {
  return (
    <Section>
      <Heading.H2>Order notes</Heading.H2>

      <TextInputField.TextArea label={null} name="comments" />
    </Section>
  );
};

export default AdditionalInformation;
