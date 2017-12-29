import styled from "styled-components";

import { color, border, spacing } from "../../../common/styles/constants";

export const Fieldset = styled.fieldset`
  background-color: ${color.background};
  border: none;
  border-radius: ${border.radius};
  margin-top: 0;
  margin-bottom: ${spacing.medium};
  padding: ${spacing.medium};
`;
