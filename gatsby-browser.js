import React from "react";
import { CartProvider } from "react-use-cart";

export const wrapRootElement = ({ element }) => (
  <CartProvider id="cart">{element}</CartProvider>
);
