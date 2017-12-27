import * as localForage from "localforage";

interface Props {
  url: string;
}

interface Response {
  payload: any;
  meta: any;
}

export async function fetchRequest({ url }: Props): Promise<Response> {
  try {
    const isNodeEnv = typeof window !== "undefined";

    const localData: any = isNodeEnv && (await localForage.getItem(url));

    if (!!localData) {
      return localData;
    }

    const response = await fetch(url);
    const payload = await response.json();
    const headers = response.headers;

    const totalPages = parseInt(headers.get("X-WP-TotalPages"), 10);

    const meta = { totalPages };

    const data = { payload, meta };

    if (!localData && isNodeEnv) {
      localForage.setItem(url, data);
    }

    return data;
  } catch (error) {
    return null;
  }
}
