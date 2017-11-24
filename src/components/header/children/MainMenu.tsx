import * as React from "react";
import { PRODUCT_LISTING_SLUGS } from "../../../common/products/constants";

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

export interface LocationChangeProps {
  type: string;
  location: PRODUCT_LISTING_SLUGS;
}

const MENU_TYPES = {
  PRODUCT_LISTING: PRODUCT_LISTING_SLUGS,
};

function getLocation(type: string, TYPES: any) {
  if (Object.values(TYPES.PRODUCT_LISTING).includes(type)) {
    return TYPES.PRODUCT_LISTING.DEFAULT;
  }
}

const MainMenu = ({ items, onLocationChange }: Props) => {
  if (!!items.length) {
    const menuItems = items.map(({ id, title, object, object_slug }) => (
      <li key={id} className="menu__item">
        <a
          className="menu__link"
          href={`/${object}/${object_slug}`}
          onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            onLocationChange({
              type: object,
              location: getLocation(object_slug, MENU_TYPES),
            });
          }}
        >
          {title}
        </a>
      </li>
    ));

    return <ul className="menu">{menuItems}</ul>;
  } else {
    return null;
  }
};

export default MainMenu;
