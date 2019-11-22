import * as React from 'react';
import {
  LOCATION_TYPES,
  CHECKOUT_SLUGS,
} from '../../common/products/constants';
import {
  LocationChangeProps,
  CartItemProps,
  ProductProps,
} from '../../common/products/typings';

import ContactForm from '../contactForm/ContactForm';
import {
  getMultipleSingleProducts,
  SingleProductProps,
} from '../../services/productApi/singleProductApi';
import ProductsListing from '../productsListing/ProductsListing';

interface Props {
  productsInCart: ProductProps[] | undefined;
  onLocationChange?: (props: LocationChangeProps) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CheckoutView = ({
  productsInCart,
  onLocationChange,
  handleSubmit,
}: Props) => {
  return (
    <>
      <section className="bg__common mb1 p1">
        <h2>Cart items</h2>

        <ProductsListing
          products={productsInCart}
          onLocationChange={onLocationChange}
        />
      </section>

      <ContactForm
        handleSubmit={handleSubmit}
        onLocationChange={onLocationChange}
      />
    </>
  );
};

export default CheckoutView;
