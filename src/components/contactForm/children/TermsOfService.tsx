import * as React from "react";
import { Field } from "redux-form";
import styled from "styled-components";

import { Fieldset } from "../styles/fieldset";

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin-left: 16px;
  margin-right: 8px;
`;

const Link = styled.a`
  margin-right: 8px;
`;

const TermsOfService = (props: any) => {
  return (
    <Fieldset>
      <h2>Terms &amp; conditions</h2>
      <p>
        <Label>
          <Field
            name="terms"
            component="input"
            type="checkbox"
            value="terms"
            required={true}
          />

          <Text>I’ve read and accept the</Text>

          <Link
            href="https://www.aadliaare.ee/en/info/kasutustingimused/"
            target="_blank"
          >
            terms &amp; conditions
          </Link>
        </Label>
      </p>
    </Fieldset>
  );
};

export default TermsOfService;
