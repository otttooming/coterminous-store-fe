import * as React from "react";
import { Field } from "redux-form";
import styled from "styled-components";

import { Fieldset } from "../styles/fieldset";

const AdditionalInformation = (props: any) => {
  return (
    <Fieldset>
      <h2>Additional Information</h2>
      <p className="form-row form-row notes" id="order_comments_field">
        <label htmlFor="order_comments">Order Notes</label>
        <textarea
          name="order_comments"
          className="input-text "
          id="order_comments"
          placeholder="Notes about your order, e.g. special notes for delivery."
          rows={2}
          cols={5}
          defaultValue={""}
        />
      </p>
    </Fieldset>
  );
};

export default AdditionalInformation;
