import { CART_SLUGS, PRODUCT_SLUGS, PRODUCT_LISTING_SLUGS } from "./constants";

export interface LocationChangeProps {
  type: string;
  location: PRODUCT_LISTING_SLUGS | CART_SLUGS | PRODUCT_SLUGS;
  query?: QueryProps;
}

interface QueryProps {
  slug: string;
}
