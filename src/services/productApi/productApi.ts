import { getAllMedia } from "../mediaApi/mediaApi";

export async function getProducts(
  api: any,
  page: number = 1,
  category?: string
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

  const resp = await fetch(url);
  const json = await resp.json();
  const resHeaders = resp.headers.get("Link");
  const totalPages = parseInt(resp.headers.get("X-WP-TotalPages"), 10);

  const products = await Promise.all(
    json.map((item: any) => getProductsItem(item, api))
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
