import * as React from 'react';
import {
  LOCATION_TYPES,
  LANDING_SLUGS,
} from '../../../common/products/constants';
import { LocationChangeProps } from '../../../common/products/typings';
import Link from '../../../components/link/Link';

interface Props {
  onLocationChange?: (props: LocationChangeProps) => void;
}

const Logo = ({ onLocationChange }: Props) => {
  return (
    <Link
      location={{ type: LOCATION_TYPES.PAGE, view: LANDING_SLUGS.DEFAULT }}
      className="d__block"
      onLocationChange={onLocationChange}
    >
      <figure
        className="aspect-ratio"
        style={{ paddingBottom: '37.209302325581%' }}
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
    </Link>
  );
};

export default Logo;
