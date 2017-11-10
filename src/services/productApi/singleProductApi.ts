import { getAllMedia } from "../mediaApi/mediaApi";

export async function getSingleProduct(api: any, name: string) {
  const url = api.buildUrl(
    { paths: [api.WC, "products"], parameters: ["slug=" + name] },
    api.SITEURL
  );

  const resp = await fetch(url);
  const product = await (await resp.json())[0];

  const imageIds = product.images
    .map((item: any) => item.id)
    .filter((item: any) => item !== 0);

  const images = await getAllMedia(imageIds, api);

  const variations = await getVariations(product, api);

  return {
    product,
    images,
    variations,
  };
}

async function getVariations(product: any, api: any) {
  const url = api.buildUrl(
    { paths: [api.WC, "products", product.id, "variations"] },
    api.SITEURL
  );

  const request = await fetch(url);
  const data = await request.json();

  if (!data.length) {
    return buildSingleProductVariation(product);
  }

  return data;
}

function buildSingleProductVariation(product: any) {
  const variation = [
    {
      price: product.price,
      attributes: [
        {
          name: "",
          option: "",
        },
      ],
      name: "",
    },
  ];

  return variation;
}
