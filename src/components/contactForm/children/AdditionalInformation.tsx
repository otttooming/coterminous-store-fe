import * as React from "react";
import { Field } from "redux-form";
import { FormSectionFieldset } from "../../../common/styles/fieldset";

const AdditionalInformation = () => {
  return (
    <FormSectionFieldset>
      <h2>Additional Information</h2>
      <p>
        <label htmlFor="comments">Order Notes</label>
        <Field id="comments" name="comments" component="textarea" type="text" />
      </p>
    </FormSectionFieldset>
  );
};

export default AdditionalInformation;
