export enum SITE_NAME {
  DEFAULT = "Aadli Aare",
}

export enum LOCATION_TYPES {
  PAGE = "page",
}

export enum LANDING_SLUGS {
  DEFAULT = "LANDING_VIEW",
}

export enum PRODUCT_LISTING_SLUGS {
  DEFAULT = "PRODUCTS",
  ET = "POOD",
}

export enum PRODUCT_SLUGS {
  DEFAULT = "PRODUCT",
}

export enum CART_SLUGS {
  DEFAULT = "CART",
}

export enum CHECKOUT_SLUGS {
  DEFAULT = "CHECKOUT",
}

export enum CATEGORY_SLUGS {
  DEFAULT = "CATEGORY",
}

export enum LANGUAGE {
  DEFAULT = "DEFAULT",
  ET = "ET",
}

export const VIEW_NAMES = [
  ...Object.values(LANDING_SLUGS),
  ...Object.values(PRODUCT_LISTING_SLUGS),
  ...Object.values(PRODUCT_SLUGS),
  ...Object.values(CART_SLUGS),
  ...Object.values(CHECKOUT_SLUGS),
  ...Object.values(CATEGORY_SLUGS),
];
