import {
  createOmnivaShippingLocations,
  createSmartpostShippingLocations,
} from "./helpers";

export interface ShippingProps {
  shippingLocations: ShippingLocations;
}

export interface ShippingLocations {
  omniva: ShippingLocationItems[];
  smartpost?: ShippingLocationItems[];
}

export interface ShippingLocationItems {
  title: string;
  locations: Locations[];
}

export interface Locations {
  address: string;
  name: string;
  service_hours: string;
  state: string;
  raw: any;
}

export async function getOmnivaShippingLocations(): Promise<
  ShippingLocationItems[]
> {
  const url = `./static/shipping/omniva.json`;

  const resp = await fetch(url);
  const raw = await resp.json();

  const shippingLocation: ShippingLocationItems[] = createOmnivaShippingLocations(
    raw,
    "EE"
  );

  return shippingLocation;
}

export async function getSmartpostaShippingLocations(): Promise<
  ShippingLocationItems[]
> {
  const url = `./static/shipping/smartpost.json`;

  const resp = await fetch(url);
  const raw = await resp.json();

  const shippingLocation: ShippingLocationItems[] = createSmartpostShippingLocations(
    raw
  );

  return shippingLocation;
}
export async function getShippingMethods(): Promise<ShippingProps> {
  const omniva = await getOmnivaShippingLocations();
  const smartpost = await getSmartpostaShippingLocations();

  const shippingLocations = { omniva, smartpost };

  return { shippingLocations };
}
