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

const VIEW_SLUGS = [
  LANDING_SLUGS,
  PRODUCT_LISTING_SLUGS,
  PRODUCT_SLUGS,
  CART_SLUGS,
  CHECKOUT_SLUGS,
  CATEGORY_SLUGS,
];

export const VIEW_NAMES = VIEW_SLUGS.reduce((acc, cur) => {
  return [...acc, ...Object.values(cur)];
}, []);

export const LANGUAGE_NAMES = VIEW_SLUGS.reduce((acc, cur) => {
  if (acc.includes(cur)) {
    return acc;
  }
  return [...acc, ...Object.keys(cur)];
}, []);

export const VIEWS = VIEW_SLUGS.reduce((acc, cur) => {
  return [
    ...acc,
    ...Object.entries(cur).map(item => ({ name: item[1], language: item[0] })),
  ];
}, []);
