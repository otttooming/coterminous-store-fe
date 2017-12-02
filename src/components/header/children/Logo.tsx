import * as React from "react";
import {
  LOCATION_TYPES,
  LANDING_SLUGS,
} from "../../../common/products/constants";
import { LocationChangeProps } from "../../../common/products/typings";

interface Props {
  onLocationChange?: (props: LocationChangeProps) => void;
}

const Logo = ({ onLocationChange }: Props) => {
  return (
    <a
      className="d__block"
      href="/"
      onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onLocationChange({
          type: LOCATION_TYPES.PAGE,
          location: LANDING_SLUGS.DEFAULT,
        });
      }}
    >
      <figure
        className="aspect-ratio"
        style={{ paddingBottom: "37.209302325581%" }}
      >
        <img
          width={430}
          height={160}
          className="aspect-ratio__img lazyloaded"
          alt="Aadli Aare"
          itemProp="image"
          src="https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png"
        />
      </figure>
    </a>
  );
};

export default Logo;
