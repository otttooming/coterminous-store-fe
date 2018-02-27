import "isomorphic-unfetch";

import { getProducts } from "../../services/productApi/productApi";
import { getSingleProduct } from "../../services/productApi/singleProductApi";
import { getPage } from "../../services/pageApi/pageApi";

import {
  CART_SLUGS,
  CHECKOUT_SLUGS,
  LOCATION_TYPES,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
  LANDING_SLUGS,
  SITE_NAME,
  CATEGORY_SLUGS,
  VIEW_NAMES,
  LANGUAGE_NAMES,
  LANGUAGE,
  PAGE_SLUGS,
} from "../../common/products/constants";

import { LocationChangeProps, ViewNames } from "../../common/products/typings";

import { State } from "../../pages/index";

import * as RoutingHelpers from "./helpers";

const handleProductsListing = async (
  props: State,
  category?: number | string
): Promise<State> => {
  const { navRouting } = props;
  const { page } = navRouting;

  const categoryRequest = !!category ? category : "";

  const products = await getProducts(page, categoryRequest);

  const nextNavRouting = {
    ...navRouting,
    page: products.page,
    totalPages: products.totalPages,
  };

  return { ...props, products: products.products, navRouting: nextNavRouting };
};

const handleSingleProduct = async (props: State): Promise<State> => {
  const { navRouting } = props;
  const { pathName } = navRouting;

  const name = pathName[0].toString();

  const singleProduct = await getSingleProduct(name);

  return { ...props, singleProduct };
};

const handleCategory = async (props: State): Promise<State> => {
  const { categories, navRouting } = props;
  const { pathName } = navRouting;

  const allSubCategories = categories.reduce((acc: any, cur: any) => {
    return [...acc, ...cur.subCategories];
  }, []);

  function flatten(cur) {
    if (cur.hasOwnProperty("subCategories")) {
      const subCategories = cur.subCategories.reduce(reduce, []);

      return [...cur.subCategories, ...subCategories];
    }

    return [];
  }

  function reduce(acc, cur) {
    return [...acc, ...flatten(cur)];
  }

  const allCategories = categories.reduce(reduce, []);

  const category = allCategories.filter((cat: any) => {
    return cat.slug === pathName[0];
  });

  const id = category[0].id;

  const products = await handleProductsListing(props, id);

  return { ...props, ...products };
};

const handleLanding = async (props: State): Promise<State> => {
  return { ...props };
};

const handlePage = async (props: State): Promise<State> => {
  const { navRouting } = props;
  const { pathName } = navRouting;

  const name = pathName[0].toString();

  const page = await getPage(name);

  return { ...props, page };
};

const handleDefault = async (props: State): Promise<State> => {
  return { ...props };
};

export const handleHistoryChange = (navRouting: LocationChangeProps) => {
  const siteName = SITE_NAME.DEFAULT;

  const title =
    !navRouting.view || Object.values(LANDING_SLUGS).includes(navRouting.view)
      ? ""
      : navRouting.view.toLowerCase();

  const pathName = !!navRouting.pathName ? navRouting.pathName.join("/") : "";

  const page = !!navRouting.page && navRouting.page > 1 ? navRouting.page : "";

  const root = `${window.location.protocol}//${window.location.host}`;

  const url = [root, title, pathName, page].filter(item => !!item).join("/");

  history.pushState("", siteName, url);

  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

export const handleRouting = async (props: State): Promise<State> => {
  const { navRouting } = props;
  const { view } = navRouting;

  switch (view) {
    case PRODUCT_SLUGS.DEFAULT:
      return handleSingleProduct(props);
    case PRODUCT_LISTING_SLUGS.DEFAULT:
      return handleProductsListing(props);
    case CATEGORY_SLUGS.DEFAULT:
      return handleCategory(props);
    case LANDING_SLUGS.DEFAULT:
      return handleLanding(props);
    case PAGE_SLUGS.DEFAULT:
      return handlePage(props);
    default:
      return handleDefault(props);
  }
};

export const createNavRoutingFromQuery = (request: any) => {
  const requestPathName = request.path.split("/").filter((item: string) => {
    return item !== "";
  });

  const view = !!requestPathName.length
    ? RoutingHelpers.findViewFromLocalizedValues(
        requestPathName[0],
        LANGUAGE.ET
      )
    : RoutingHelpers.findViewFromLocalizedValues(
        LANDING_SLUGS.DEFAULT,
        LANGUAGE.ET
      );

  const language = RoutingHelpers.findLanguage(requestPathName[0] || null);

  const page =
    !!requestPathName.length &&
    !isNaN(Number(requestPathName[requestPathName.length - 1]))
      ? Number(requestPathName[requestPathName.length - 1])
      : 1;

  const pathName = requestPathName.filter(RoutingHelpers.removeView);

  const navRouting: LocationChangeProps = {
    type: LOCATION_TYPES.PAGE,
    view,
    pathName,
    page,
    language,
  };

  return navRouting;
};
