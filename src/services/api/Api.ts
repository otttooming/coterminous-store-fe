export const SITEURL = {
  host: "https://dev-spiceflow.pantheonsite.io",
  consumerKey: "ck_a67345603373570cfc213659c53f941e2dc8c64f",
  consumerSecret: "cs_186c4d5992dab11ceb56059bccf0dc31ea77c37b",
};

export const WP = "wp/v2";
export const WC = "wc/v2";
export const WPMENUS = "wp-api-menus/v2";

interface BuildUrlProps {
  paths?: string[];
  parameters?: string[];
}

interface HostProps {
  host: string;
  consumerKey: string;
  consumerSecret: string;
}

export function buildUrl(props: BuildUrlProps, host: HostProps) {
  const { paths = [], parameters = [] } = props;

  const path = [host.host, "wp-json", ...paths].join("/");

  const parameter = [
    ...parameters,
    `consumer_key=${host.consumerKey}`,
    `consumer_secret=${host.consumerSecret}`,
  ].join("&");

  return `${path}/?${parameter}`;
}

export function createOrder(order, api) {
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append(
    "Authorization",
    `Basic ${btoa(api.consumerKey + ":" + api.consumerSecret)}`
  );

  const orderReq = new Promise(resolve => {
    fetch("https://spiceflow.net.ee/wp-json/wc/v2/orders", {
      headers,
      method: "post",
      body: JSON.stringify(order),
    })
      .then(response => {
        return response.json();
      })
      .then(order => {
        resolve(order);
      });
  });

  return orderReq;
}

export async function fetchExternalIp() {
  const response = await fetch("https://api.ipify.org?format=json");
  const json = await response.json();

  return json;
}

// var data = JSON.stringify({
//   "payment_method": "bacs",
//   "payment_method_title": "Direct Bank Transfer",
//   "set_paid": true,
//   "billing": {
//     "first_name": "John",
//     "last_name": "Doe",
//     "address_1": "969 Market",
//     "address_2": "",
//     "city": "San Francisco",
//     "state": "CA",
//     "postcode": "94103",
//     "country": "US",
//     "email": "john.doe@example.com",
//     "phone": "(555) 555-5555"
//   },
//   "shipping": {
//     "first_name": "John",
//     "last_name": "Doe",
//     "address_1": "969 Market",
//     "address_2": "",
//     "city": "San Francisco",
//     "state": "CA",
//     "postcode": "94103",
//     "country": "US"
//   },
//   "line_items": [
//     {
//       "product_id": 93,
//       "quantity": 2
//     },
//     {
//       "product_id": 22,
//       "variation_id": 23,
//       "quantity": 1
//     }
//   ],
//   "shipping_lines": [
//     {
//       "method_id": "flat_rate",
//       "method_title": "Flat Rate",
//       "total": 10
//     }
//   ]
// });

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("POST", "https://spiceflow.net.ee/wp-json/wc/v2/orders");
// xhr.setRequestHeader("content-type", "application/json");
// xhr.setRequestHeader("authorization", "Basic Y2tfMjdjOTZkYTZjMjhhYTJkOTAyMmVmMzVkODI0NjA3MTg5Zjc2YjU0OTpjc18xMGVkN2QzMDQxNmQxNDcyNzdmMGMwN2Y4ZTQzZTZmOThlMGQyYmY5");

// xhr.send(data);

// fetch('https://spiceflow.net.ee/wp-json/wc/v2/orders', {
//   method: 'post',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic Y2tfMjdjOTZkYTZjMjhhYTJkOTAyMmVmMzVkODI0NjA3MTg5Zjc2YjU0OTpjc18xMGVkN2QzMDQxNmQxNDcyNzdmMGMwN2Y4ZTQzZTZmOThlMGQyYmY5'
//   },
//   body: data
// })
