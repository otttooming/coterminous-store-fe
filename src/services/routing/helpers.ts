import { ViewNames } from "../../common/products/typings";

import {
  CART_SLUGS,
  CHECKOUT_SLUGS,
  LOCATION_TYPES,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
  LANDING_SLUGS,
  SITE_NAME,
  CATEGORY_SLUGS,
  VIEWS,
  LANGUAGE,
} from "../../common/products/constants";

function findFromLocalized(
  viewNames: string[],
  currentView: string,
  defaultName: ViewNames
) {
  const localizedName = viewNames.filter(
    item => item === currentView.toUpperCase()
  )[0];

  return !!localizedName ? localizedName.toUpperCase() : defaultName;
}

export function findViewFromLocalizedValues(
  localizedView: string,
  language: LANGUAGE
): ViewNames {
  switch (localizedView.toUpperCase()) {
    case findFromLocalized(
      Object.values(PRODUCT_SLUGS),
      localizedView,
      PRODUCT_SLUGS.DEFAULT
    ):
      return PRODUCT_SLUGS.DEFAULT;
    case findFromLocalized(
      Object.values(PRODUCT_LISTING_SLUGS),
      localizedView,
      PRODUCT_LISTING_SLUGS.DEFAULT
    ):
      return PRODUCT_LISTING_SLUGS.DEFAULT;
    case findFromLocalized(
      Object.values(CATEGORY_SLUGS),
      localizedView,
      CATEGORY_SLUGS.DEFAULT
    ):
      return CATEGORY_SLUGS.DEFAULT;
    default:
      return LANDING_SLUGS.DEFAULT;
  }
}

export function findLanguage(view: string) {
  if (!view) {
    return LANGUAGE.DEFAULT;
  }

  const language = VIEWS.find(item => {
    return item.name === view.toUpperCase();
  });

  if (!language) {
    return LANGUAGE.DEFAULT;
  }

  return language.language;
}

export function checkForExistingView(view: string): boolean {
  const isExistingView = VIEWS.find(item => item.name === view);

  return !!isExistingView;
}