import styled, { css } from "styled-components";

import { color, border, spacing } from "../../../common/styles/constants";

const section = css`
  background-color: ${color.background};
  border-radius: ${border.radius};
  margin-bottom: ${spacing.medium};
  padding: ${spacing.medium};
`;

const fieldsetReset = css`
  border: none;
  margin: 0;
  padding: 0;
`;

export const FormSection = styled.section`
  ${section};
`;

export const FormSectionFieldset = styled.fieldset`
  ${fieldsetReset};
  ${section};
`;

export const Fieldset = styled.fieldset`
  ${fieldsetReset};
`;
