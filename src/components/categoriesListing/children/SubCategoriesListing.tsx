import * as React from "react";
import { CategoryProps } from ".././CategoriesListing";
import CategoryGroup from "./CategoryGroup";

interface Props {
  categories: CategoryProps[];
  change?: (id: number) => void;
}

export default class SubCategories extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  handleCategoryChange = (id: number) => {
    this.props.change(id);
  };

  renderSubCategory(categories: CategoryProps[]) {
    const categoryListing = categories.map((item: any, index: number) => {
      const { id, name, count, description, subCategories } = item;

      return (
        <CategoryGroup
          key={index}
          category={item}
          change={this.handleCategoryChange}
        />
      );
    });

    return <ul className="cat-list__subcat">{categoryListing}</ul>;
  }

  render() {
    const { categories } = this.props;

    const categoryListing = categories.map((item: any, index: number) => {
      const { id, name, count, description, subCategories } = item;

      return (
        <CategoryGroup
          key={index}
          category={item}
          change={this.handleCategoryChange}
        >
          {subCategories.length > 0 && this.renderSubCategory(subCategories)}
        </CategoryGroup>
      );
    });

    return <ul className="cat-list__subcat">{categoryListing}</ul>;
  }
}
