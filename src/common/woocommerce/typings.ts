import { Billing } from "./typings";
import { Countries } from "./../countries/constants";

export interface Billing {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: Countries;
  email: string;
  phone: string;
}

export interface Shipping {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: Countries;
}

export interface LineItems {
  product_id: number;
  quantity: number;
  variation_id?: number;
}

export interface ShippingLines {
  method_id: string;
  method_title: string;
  total: number;
}

export interface MetaData {
  key: string;
  value: string;
}

export interface CreateOrderRequest {
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
  billing: Billing;
  shipping?: Shipping;
  line_items: LineItems[];
  shipping_lines: ShippingLines[];
  meta_data?: MetaData[];
}

export interface CreateOrderResponse {
  id: number;
  parent_id: number;
  number: string;
  order_key: string;
  created_via: string;
  version: string;
  status: string;
  currency: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  prices_include_tax: boolean;
  customer_id: number;
  customer_ip_address: string;
  customer_user_agent: string;
  customer_note: string;
  billing: Billing;
  shipping: Shipping;
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  date_paid: string;
  date_paid_gmt: string;
  date_completed: null;
  date_completed_gmt: null;
  cart_hash: string;
  meta_data: MetaData[];
  line_items: CreateOrderResponseLine[];
  tax_lines: TaxLine[];
  shipping_lines: CreateOrderResponseShippingLine[];
  fee_lines: any[];
  coupon_lines: any[];
  refunds: any[];
  _links: Links;
}

export interface Links {
  self: Collection[];
  collection: Collection[];
}

export interface Collection {
  href: string;
}

export interface CreateOrderResponseLine {
  id: number;
  name: string;
  product_id: number;
  variation_id: number;
  quantity: number;
  tax_class: string;
  subtotal: string;
  subtotal_tax: string;
  total: string;
  total_tax: string;
  taxes: Tax[];
  meta_data: ResponseMetaData[];
  sku: string;
  price: number;
}

export interface ResponseMetaData {
  id: number;
  key: string;
  value: string;
}

export interface Tax {
  id: number;
  total: string;
  subtotal: string;
}

export interface CreateOrderResponseShippingLine {
  id: number;
  method_title: string;
  method_id: string;
  total: string;
  total_tax: string;
  taxes: any[];
  meta_data: any[];
}

export interface TaxLine {
  id: number;
  rate_code: string;
  rate_id: number;
  label: string;
  compound: boolean;
  tax_total: string;
  shipping_tax_total: string;
  meta_data: any[];
}

export interface WCRestApiError {
  code: "woocommerce_rest_term_invalid";
  message: string;
  data: WCRestApiErrorData;
}

export interface WCRestApiErrorData {
  status: number;
}

export function isWCRestApiError<T>(
  response: WCRestApiError | T
): response is WCRestApiError {
  return !response ? false : (<WCRestApiError>response).code !== undefined;
}
