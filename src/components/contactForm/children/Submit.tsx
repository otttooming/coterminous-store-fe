import * as React from "react";

const Submit = (props: any) => {
  return (
    <p className="bg__common p1 mb1">
      <input
        type="submit"
        className="button big"
        name="woocommerce_checkout_place_order"
        id="place_order"
        defaultValue="Place order"
        data-value="Place order"
      />
    </p>
  );
};

export default Submit;
