import * as api from "../api/Api";

import { getAllMedia } from "../mediaApi/mediaApi";
import { fetchRequest } from "../fetchApi/fetchApi";

export async function getProducts(
  page: number = 1,
  category?: number | string,
  include?: number[]
) {
  const categoryParameter = category ? "category=" + category : "";
  const includeParameter = include ? `include=${include.join()}` : "";

  const url = api.buildUrl(
    {
      paths: [api.WC, "products"],
      parameters: [
        "in_stock=true",
        "status=publish",
        categoryParameter,
        "page=" + page,
        "per_page=16",
        includeParameter,
      ],
    },
    api.SITEURL
  );

  const response = await fetchRequest({ url });
  const { payload, meta } = response;
  const { totalPages } = meta;

  const products = await Promise.all(
    payload.map((item: any) => getProductsItem(item))
  );

  return {
    products,
    totalPages,
    category,
    page,
  };
}

async function getProductsItem(product: any) {
  const imageIds = product.images
    .map(item => item.id)
    .filter(item => item !== 0);

  const images = await getAllMedia(imageIds);

  return {
    product,
    images,
  };
}
