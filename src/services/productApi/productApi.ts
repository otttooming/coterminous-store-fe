import { getAllMedia } from "../mediaApi/mediaApi";
import { fetchRequest } from "../fetchApi/fetchApi";

export async function getProducts(
  api: any,
  page: number = 1,
  category?: number | string
) {
  const categoryParameter = category ? "category=" + category : "";
  const url = api.buildUrl(
    {
      paths: [api.WC, "products"],
      parameters: [
        "in_stock=true",
        "status=publish",
        categoryParameter,
        "page=" + page,
        "per_page=16",
      ],
    },
    api.SITEURL
  );

  const response = await fetchRequest({ url });
  const { payload, meta } = response;
  const { totalPages } = meta;

  const products = await Promise.all(
    payload.map((item: any) => getProductsItem(item, api))
  );

  return {
    products,
    totalPages,
    category,
    page,
  };
}

async function getProductsItem(product: any, api) {
  const imageIds = product.images
    .map(item => item.id)
    .filter(item => item !== 0);

  const images = await getAllMedia(imageIds, api);

  return {
    product,
    images,
  };
}
