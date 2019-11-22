import * as React from 'react';
import { PRODUCT_LISTING_SLUGS } from '../../../common/products/constants';
import { LocationChangeProps } from '../../../common/products/typings';
import Link from '../../../components/link/Link';

interface Props {
  items?: MenuItems[];
  onLocationChange?: (props: LocationChangeProps) => void;
}

interface MenuItems {
  id: number;
  title: string;
  object: string;
  object_slug: string;
}

const MENU_TYPES = {
  PRODUCT_LISTING: PRODUCT_LISTING_SLUGS,
};

function getLocation(type: string, TYPES: any) {
  if (!type) {
    return null;
  }

  const isLocationPresentInConstants = Object.values(
    TYPES.PRODUCT_LISTING,
  ).includes(type.toUpperCase());

  if (isLocationPresentInConstants) {
    return TYPES.PRODUCT_LISTING.DEFAULT;
  }
}

const MainMenu = ({ items, onLocationChange }: Props) => {
  if (Array.isArray(items)) {
    const menuItems = items.map(({ id, title, object, object_slug }) => (
      <li key={id} className="menu__item">
        <Link
          location={{
            type: object,
            view: getLocation(object_slug, MENU_TYPES),
          }}
          className="menu__link"
          onLocationChange={onLocationChange}
        >
          {title}
        </Link>
      </li>
    ));

    return <ul className="menu">{menuItems}</ul>;
  } else {
    return null;
  }
};

export default MainMenu;
