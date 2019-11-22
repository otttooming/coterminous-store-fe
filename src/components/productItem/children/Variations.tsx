import * as React from 'react';
import Icon from '../../../components/icon/Icon';
import Quantity from '../../../components/form/Quantity';
import styled from 'styled-components';
import { SingleProductVariationProps } from '../../../services/productApi/singleProductApi';
import { CartItemProps } from '../../../common/products/typings';

const VariationItem = styled.li`
  list-style: none;
`;

const Variations = (props: any) => {
  const { product, variations } = props;

  if (!Array.isArray(variations)) {
    return null;
  }

  const items = variations.map(
    (variation: SingleProductVariationProps, index: number) => {
      const { attributes, price, id } = variation;
      const { name } = attributes;

      // const fieldProps: CartItemProps = {
      //   productSlug: product.slug,
      //   variationId: id,
      // };

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

          {/* <Field
            {...fieldProps}
            name={`cartItems.id_${id.toString()}`}
            component={Quantity}
          /> */}
        </VariationItem>
      );
    },
  );

  return <ul className="product-variations">{items}</ul>;
};

export default Variations;
