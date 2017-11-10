import * as React from "react";
import { CategoryProps } from ".././CategoriesListing";
import Icon from "../../../components/icon/Icon";

interface Props {
  category: CategoryProps;
  change?: (id: number) => void;
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

  handleCategoryChange = (id: number) => {
    this.props.change(id);
  };

  render() {
    const { children, controls } = this.props;
    const { id, name, count, description } = this.props.category;
    const { isSubMenuOpen } = this.state;

    if (!count) {
      return null;
    }

    return (
      <li
        className={`cat-list__group ${isSubMenuOpen
          ? "cat-list__group-open"
          : ""}`}
      >
        <h2 className="cat-list__title">
          <a href="#" onClick={() => this.handleCategoryChange(id)}>
            <span className="cat-list__name">{name}</span>
            {!!description && (
              <span className="cat-list__desc">{description}</span>
            )}
            <span className="cat-list__count">{count}</span>
          </a>

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
