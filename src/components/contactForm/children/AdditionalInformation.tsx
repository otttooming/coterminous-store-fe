import * as React from "react";
import { Field } from "redux-form";
import styled from "styled-components";

import { FormSectionFieldset } from "../styles/fieldset";

const AdditionalInformation = (props: any) => {
  return (
    <FormSectionFieldset>
      <h2>Additional Information</h2>
      <p className="form-row form-row notes" id="order_comments_field">
        <label htmlFor="comments">Order Notes</label>
        <Field
          name="comments"
          component="textarea"
          type="text"
          required={true}
        />
      </p>
    </FormSectionFieldset>
  );
};

export default AdditionalInformation;
