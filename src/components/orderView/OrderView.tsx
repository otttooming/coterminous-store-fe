import * as React from "react";
import {
  LOCATION_TYPES,
  CHECKOUT_SLUGS,
} from "../../common/products/constants";
import {
  LocationChangeProps,
  CartItemProps,
  ProductProps,
} from "../../common/products/typings";

import Order from "./children/Order";
import {
  getMultipleSingleProducts,
  SingleProductProps,
} from "../../services/productApi/singleProductApi";
import ProductsListing from "../productsListing/ProductsListing";
import { CreateOrderResponse } from "../../common/woocommerce/typings";

interface Props {
  productsInCart: ProductProps[] | undefined;
  onLocationChange?: (props: LocationChangeProps) => void;
  order: CreateOrderResponse | undefined;
}

const OrderView = ({ productsInCart, onLocationChange, order }: Props) => {
  return (
    <>
      <section className="bg__common mb1 p1">
        <h2>Cart items</h2>

        <ProductsListing
          products={productsInCart}
          onLocationChange={onLocationChange}
        />
      </section>

      <Order order={order} onLocationChange={onLocationChange} />
    </>
  );
};

export default OrderView;
