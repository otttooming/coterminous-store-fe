import { createOmnivaShippingLocations } from "./helpers";

export interface ShippingProps {
  shippingLocations: ShippingLocations;
}

export interface ShippingLocations {
  omniva: ShippingLocationItems[];
  smartpost?: ShippingLocationItems[];
}

export interface ShippingLocationItems {}

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

export async function getShippingMethods(): Promise<ShippingProps> {
  const omniva = await getOmnivaShippingLocations();

  const shippingLocations = {
    omniva,
  };

  return { shippingLocations };
}
