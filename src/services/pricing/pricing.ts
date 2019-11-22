import { FormValues, ProductProps } from './../../common/products/typings';
import { ShoppingCartPrice } from '../../common/products/typings';

export function calculateShoppingCartPrice(
  formValues: FormValues,
  productsInCart: ProductProps[],
): ShoppingCartPrice | undefined {
  if (!formValues || !productsInCart) {
    return undefined;
  }

  const cartItems = Object.values(formValues.cartItems);

  const variations = productsInCart.reduce(
    (acc, cur) => [...acc, ...cur.variations],
    [],
  );

  const total = variations.reduce((acc, cur) => {
    const currentCartItem = cartItems.find(item => item.variationId === cur.id);

    if (!currentCartItem) {
      return acc;
    }

    return acc + Number(cur.price) * currentCartItem.quantity;
  }, 0);

  return {
    total,
  };
}
