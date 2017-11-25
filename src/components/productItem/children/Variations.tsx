import * as React from "react";
import Icon from "../../../components/icon/Icon";
import Quantity from "../../../components/form/Quantity";
import styled from "styled-components";
import { Field } from "redux-form";

const VariationItem = styled.li`
  list-style: none;
`;

const Variations = (props: any) => {
  const { variations } = props;

  const items = variations.map(({ attributes, price, id }, index) => (
    <VariationItem key={index} className="product-variations__item">
      {!!attributes.length && (
        <ul className="product-variations__attribute">
          <li>
            {attributes[0].name}: {attributes[0].option}
          </li>
        </ul>
      )}
      {!!price && (
        <div className="product-variations__price ">
          <span className="price__block">{price}€</span>
        </div>
      )}

      <Field name={`products.id_${id.toString()}`} component={Quantity} />
    </VariationItem>
  ));

  return <ul className="product-variations">{items}</ul>;
};

export default Variations;
