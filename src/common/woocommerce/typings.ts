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

export interface CreateOrderRequest {
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
  billing: Billing;
  shipping?: Shipping;
  line_items: LineItems[];
  shipping_lines: ShippingLines[];
}
