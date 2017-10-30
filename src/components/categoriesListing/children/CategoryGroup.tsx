import * as React from "react";
import { CategoryProps } from ".././CategoriesListing";

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
              <svg
                className="control__down"
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 501.5 501.5"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"
                  />
                </g>
              </svg>
            </div>
          )}
        </h2>
        {children}
      </li>
    );
  }
}