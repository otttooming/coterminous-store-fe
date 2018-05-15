import * as React from "react";
import styled from "styled-components";
import Link from "../../../components/link/Link";
import { LOCATION_TYPES, PAGE_SLUGS } from "../../../common/products/constants";
import { LocationChangeProps } from "../../../common/products/typings";
import { Section, Heading, CheckboxField } from "coterminous-styled";

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
    <Section>
      <Heading.H1>Terms and conditions</Heading.H1>

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

      <CheckboxField
        label={null}
        inputLabel="terms of service"
        name="terms"
        isRequired={true}
      />
    </Section>
  );
};

export default TermsOfService;
