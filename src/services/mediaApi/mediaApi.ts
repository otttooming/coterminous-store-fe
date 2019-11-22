import * as api from '../api/Api';

import { MediaItemResponseTypes } from './mediaTypes';
import { fetchRequest } from '../fetchApi/fetchApi';

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

export async function getAllMedia(ids: number[]) {
  const mediaItems = ids.map((id: number) => getMedia(id));

  return Promise.all(mediaItems);
}

export async function getMedia(id: number) {
  try {
    const url = api.buildUrl(
      { paths: [api.WP, 'media', id.toString()] },
      api.SITEURL,
    );

    const response = await fetchRequest({ url });
    const { payload } = response;

    const data: MediaItemResponseTypes = { ...payload };

    const media: MediaItemProps = {
      dimensions: {
        width: data.media_details.width,
        height: data.media_details.height,
        aspectRatio: calcAspectRatio(
          data.media_details.width,
          data.media_details.height,
        ),
      },
      imageSizes: Object.values(data.media_details.sizes),
    };

    return media;
  } catch (e) {
    // tslint:disable-next-line
    console.log(e);
  }
}

function calcAspectRatio(width: number, height: number) {
  const aspectRatio = (height / width) * 100;

  return aspectRatio;
}
