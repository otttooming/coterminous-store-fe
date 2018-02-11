import {
  LANDING_SLUGS,
  CART_SLUGS,
  CHECKOUT_SLUGS,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
  CATEGORY_SLUGS,
  LANGUAGE,
  PAGE_SLUGS,
} from "./constants";

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
  | CART_SLUGS
  | PRODUCT_SLUGS
  | CATEGORY_SLUGS
  | CHECKOUT_SLUGS;

export interface SeoProps {
  itemProp: string;
}
