import { MediaItemResponseTypes } from "./mediaTypes";

interface Dimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

interface ImageSizes {
  file: string;
  height: number;
  width: number;
  mime_type: string;
  source_url: string;
}

export interface MediaItemProps {
  dimensions: Dimensions;
  imageSizes: ImageSizes[];
}

export async function getAllMedia(ids: number[], api: any) {
  const mediaItems = ids.map((id: number) => getMedia(id, api));

  return Promise.all(mediaItems);
}

export async function getMedia(id: number, api: any) {
  try {
    const url = api.buildUrl({ paths: [api.WP, "media", id] }, api.SITEURL);
    const response: MediaItemResponseTypes = await (await fetch(url)).json();
    const media: MediaItemProps = {
      dimensions: {
        width: response.media_details.width,
        height: response.media_details.height,
        aspectRatio: calcAspectRatio(
          response.media_details.width,
          response.media_details.height
        ),
      },
      imageSizes: Object.values(response.media_details.sizes),
    };

    return media;
  } catch (e) {
    // tslint:disable-next-line
    console.log(e);
  }
}

function calcAspectRatio(width: number, height: number) {
  const aspectRatio = height / width * 100;

  return aspectRatio;
}
