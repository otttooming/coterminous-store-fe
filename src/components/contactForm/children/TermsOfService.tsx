import * as React from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import Link from "../../../components/link/Link";
import { FormSectionFieldset } from "../styles/fieldset";
import { LOCATION_TYPES, PAGE_SLUGS } from "../../../common/products/constants";
import { LocationChangeProps } from "../../../common/products/typings";

interface Props {
  onLocationChange: (props: LocationChangeProps) => void;
}

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin-left: 16px;
  margin-right: 8px;
`;

const LinkWithStyle = styled(Link)`
  margin-right: 8px;
`;

const TermsOfService = ({ onLocationChange }: Props) => {
  return (
    <FormSectionFieldset>
      <h2>Terms and conditions</h2>
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

          <LinkWithStyle
            location={{
              type: LOCATION_TYPES.PAGE,
              view: PAGE_SLUGS.DEFAULT,
              pathName: ["tos"],
            }}
            onLocationChange={onLocationChange}
          >
            terms and conditions
          </LinkWithStyle>
        </Label>
      </p>
    </FormSectionFieldset>
  );
};

export default TermsOfService;
