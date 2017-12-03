import * as React from "react";
import Icon from "../../../components/icon/Icon";
import Quantity from "../../../components/form/Quantity";
import styled from "styled-components";
import { Field } from "redux-form";
import { SingleProductVariationProps } from "../../../services/productApi/singleProductApi";

const VariationItem = styled.li`
  list-style: none;
`;

const Variations = (props: any) => {
  const { product, variations } = props;

  const items = variations.map(
    (variation: SingleProductVariationProps, index: number) => {
      const { attributes, price, id } = variation;
      const { name } = attributes;
      return (
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

          <Field
            name={`products.id_${id.toString()}`}
            id={id}
            component={Quantity}
            props={props}
          />
        </VariationItem>
      );
    }
  );

  return <ul className="product-variations">{items}</ul>;
};

export default Variations;
