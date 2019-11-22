import * as React from 'react';
import { CategoryProps } from '.././CategoriesListing';
import Icon from '../../../components/icon/Icon';
import Link from '../../../components/link/Link';
import {
  LOCATION_TYPES,
  CATEGORY_SLUGS,
} from '../../../common/products/constants';
import { LocationChangeProps } from '../../../common/products/typings';

interface Props {
  category: CategoryProps;
  onLocationChange?: (props: LocationChangeProps) => void;
  controls?: boolean;
}

interface State {
  isSubMenuOpen: boolean;
}

export default class CategoryGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isSubMenuOpen: false,
    };
  }

  handleSubMenuToggle = () => {
    this.setState({
      isSubMenuOpen: !this.state.isSubMenuOpen,
    });
  };

  render() {
    const { children, controls, onLocationChange } = this.props;
    const { id, name, count, description, slug } = this.props.category;
    const { isSubMenuOpen } = this.state;

    if (!count) {
      return null;
    }

    return (
      <li
        className={`cat-list__group ${
          isSubMenuOpen ? 'cat-list__group-open' : ''
        }`}
      >
        <h2 className="cat-list__title">
          <Link
            location={{
              type: LOCATION_TYPES.PAGE,
              view: CATEGORY_SLUGS.DEFAULT,
              pathName: [slug],
            }}
            className="products-listing__link"
            onLocationChange={onLocationChange}
          >
            <span className="cat-list__name">{name}</span>
            {!!description && (
              <span className="cat-list__desc">{description}</span>
            )}
            <span className="cat-list__count">{count}</span>
          </Link>

          {controls && (
            <div
              className="cat-list__subcat-control control__items"
              onClick={this.handleSubMenuToggle}
            >
              <Icon
                icon="arrow-down"
                width={24}
                height={24}
                className="control__down"
              />
            </div>
          )}
        </h2>
        {children}
      </li>
    );
  }
}
