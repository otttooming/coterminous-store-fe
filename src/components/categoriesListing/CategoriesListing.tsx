import * as React from "react";

interface Props {
  categories: CategoryProps[];
  change: (id: number) => void;
  handleCategoryChange(id: string): void;
}

interface CategoryProps {
  id: number;
  name: string;
  count: number;
  description: string;
}

export default class CategoriesListing extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  handleCategoryChange = (id: number) => {
    this.props.change(id);
  };

  render() {
    const { categories } = this.props;

    const categoriesListing = categories.map((item, index) => {
      const { id, name, count, description } = item;

      return (
        <div key={index} className="cat-list__group">
          <h2 className="cat-list__title">
            <a href="#" onClick={() => this.handleCategoryChange(id)}>
              <span className="cat-list__name">{name}</span>
              {!!description && (
                <span className="cat-list__desc">{description}</span>
              )}
              <span className="cat-list__count">{count}</span>
            </a>

            <div className="cat-list__subcat-control control__items">
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
          </h2>

          <ul className="cat-list__subcat" />
        </div>
      );
    });

    return <ul className="menu">{categoriesListing}</ul>;
  }
}
