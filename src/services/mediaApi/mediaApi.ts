export async function getAllMedia(ids, api) {
  const mediaItems = ids.map(id => getMedia(id, api));

  return await Promise.all(mediaItems);
}

export async function getMedia(id, api) {
  const url = api.buildUrl({ paths: [api.WP, "media", id] }, api.SITEURL);
  const response = await fetch(url);

  return await response.json();
}
