interface Props {
  url: string;
}

interface Response {
  payload: any;
  headers: any;
  meta: any;
}

export async function fetchRequest({ url }: Props): Promise<Response> {
  try {
    const response = await fetch(url);
    const payload = await response.json();
    const headers = response.headers;

    const totalPages = parseInt(headers.get("X-WP-TotalPages"), 10);

    const meta = { totalPages };

    return { payload, headers, meta };
  } catch (error) {
    return null;
  }
}
