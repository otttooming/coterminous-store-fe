import { Billing } from "./../woocommerce/typings";
import {
  LANDING_SLUGS,
  ORDER_SLUGS,
  CHECKOUT_SLUGS,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
  CATEGORY_SLUGS,
  LANGUAGE,
  PAGE_SLUGS,
} from "./constants";
import { MediaItemProps } from "../../services/mediaApi/mediaApi";

export interface LocationChangeProps {
  type: string;
  view?: ViewNames;
  pathName?: PathName[];
  query?: string[];
  page?: number;
  totalPages?: number;
  language?: LANGUAGE;
}

type PathName = string | number;

export type ViewNames =
  | PAGE_SLUGS
  | LANDING_SLUGS
  | PRODUCT_LISTING_SLUGS
  | ORDER_SLUGS
  | PRODUCT_SLUGS
  | CATEGORY_SLUGS
  | CHECKOUT_SLUGS;

export interface SeoProps {
  itemProp: string;
}

export interface CartItemProps {
  productSlug: string;
  variationId: number;
  quantity: number;
}

export interface FormValues {
  cartItems: { [key: string]: CartItemProps };
  billing: Billing;
}

export interface ProductProps {
  product: ProductItem | undefined;
  images?: MediaItemProps[];
  variations?: any;
}

export interface ProductItem {
  id: number;
  name: string;
  slug: string;
  price: number;
  price_html: string;
}

export interface ShoppingCartPrice {
  total: number;
}
