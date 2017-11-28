import { getAllMedia } from "../mediaApi/mediaApi";

export interface SingleProductProps {
  product: any;
  images: any;
  variations: any;
}

export async function getSingleProduct(
  api: any,
  name: string
): Promise<SingleProductProps> {
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

  return { product, images, variations };
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

  const availableVariations = data.filter(
    (variation: any) => variation.purchasable === true
  );

  return availableVariations;
}

function buildSingleProductVariation(product: any) {
  const variation = [
    {
      id: product.id,
      price: product.price,
      attributes: [] as any,
      name: "",
    },
  ];

  return variation;
}
