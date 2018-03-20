import { SITEURL, WC, buildUrl } from "../api/Api";

import {
  CreateOrderRequest,
  CreateOrderResponse,
  WCRestApiError,
} from "../../common/woocommerce/typings";

export async function createOrder(
  order: CreateOrderRequest
): Promise<CreateOrderResponse | WCRestApiError> {
  try {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append(
      "Authorization",
      `Basic ${btoa(SITEURL.consumerKey + ":" + SITEURL.consumerSecret)}`
    );

    const url = buildUrl({ paths: [WC, "orders"] }, SITEURL);

    const request = await fetch(url, {
      headers,
      method: "post",
      body: JSON.stringify(order),
    });

    const response: CreateOrderResponse | WCRestApiError = await request.json();

    return response;
  } catch (e) {
    // tslint:disable-next-line
    console.log(e);
  }
}

export async function fetchExternalIp() {
  const response = await fetch("https://api.ipify.org?format=json");
  const json = await response.json();

  return json;
}
