import * as localForage from "localforage";

interface Props {
  url: string;
  options?: Options;
}

interface Response {
  payload: any;
  meta: any;
}

interface Options {
  type: FETCH_TYPE;
}

export enum FETCH_TYPE {
  JSON = "JSON",
  TEXT = "TEXT",
}

export async function fetchRequest({ url, options }: Props): Promise<Response> {
  try {
    const isNodeEnv = typeof window === "undefined";
    const localData: any = !isNodeEnv && (await localForage.getItem(url));

    if (!isNodeEnv && !!localData) {
      return localData;
    }

    const response = await fetch(url);
    const payload =
      options && options.type && options.type === FETCH_TYPE.TEXT
        ? await response.text()
        : await response.json();

    const headers = response.headers;

    const totalPages = parseInt(headers.get("X-WP-TotalPages"), 10);

    const meta = { totalPages };

    const data = { payload, meta };

    if (!localData && !isNodeEnv) {
      localForage.setItem(url, data);
    }

    return data;
  } catch (error) {
    return null;
  }
}
