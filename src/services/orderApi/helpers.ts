import {
  LOCATION_TYPES,
  CHECKOUT_SLUGS,
  ORDER_SLUGS,
} from './../../common/products/constants';
import {
  CreateOrderRequest,
  CreateOrderResponse,
  Billing,
  LineItems,
  WCRestApiError,
  isWCRestApiError,
} from './../../common/woocommerce/typings';
import { ProductProps } from './../../common/products/typings';

import { FormValues } from './../../common/products/typings';
import { Countries } from '../../common/countries/constants';
import { State } from '../../pages';

export function buildOrder(
  values: FormValues,
  productsInCart: ProductProps[],
): CreateOrderRequest | undefined {
  if (!values || !values.billing || !productsInCart) {
    return undefined;
  }

  const billing: Billing = {
    first_name: values.billing.first_name,
    last_name: values.billing.last_name,
    address_1: values.billing.address_1,
    address_2: values.billing.address_2,
    city: values.billing.city,
    postcode: values.billing.postcode,
    country: Countries.Estonia,
    state: '',
    email: values.billing.email,
    phone: values.billing.phone,
  };

  const items: LineItems[] = productsInCart.map(product => {
    return {
      product_id: product.product.id,
      quantity: 1,
    };
  });

  const order: CreateOrderRequest = {
    payment_method: '',
    payment_method_title: '',
    set_paid: false,
    billing,
    line_items: items,
    shipping_lines: undefined,
  };

  return order;
}

export function handleCreateOrderRequest(
  response: CreateOrderResponse | WCRestApiError,
  state: State,
): State {
  if (!isWCRestApiError(response)) {
    const navRouting = { type: LOCATION_TYPES.PAGE, view: ORDER_SLUGS.DEFAULT };

    return { ...state, order: response, navRouting };
  } else {
    return state;
  }
}
