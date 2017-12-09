import {
  LANDING_SLUGS,
  CART_SLUGS,
  CHECKOUT_SLUGS,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
} from "./constants";

export interface LocationChangeProps {
  type: string;
  view?: ViewNames;
  pathName?: string[];
  query?: string[];
}

type ViewNames =
  | LANDING_SLUGS
  | PRODUCT_LISTING_SLUGS
  | CART_SLUGS
  | PRODUCT_SLUGS
  | CHECKOUT_SLUGS;

export interface SeoProps {
  itemProp: string;
}
