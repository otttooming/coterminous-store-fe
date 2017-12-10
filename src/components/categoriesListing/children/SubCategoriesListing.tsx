import * as React from "react";
import { CategoryProps } from ".././CategoriesListing";
import CategoryGroup from "./CategoryGroup";
import { LocationChangeProps } from "../../../common/products/typings";

interface Props {
  categories: CategoryProps[];
  onLocationChange?: (props: LocationChangeProps) => void;
}

export default class SubCategories extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  renderSubCategory(categories: CategoryProps[]) {
    const { onLocationChange } = this.props;

    const categoryListing = categories.map((item: any, index: number) => {
      const { id, name, count, description, subCategories } = item;

      return (
        <CategoryGroup
          key={index}
          category={item}
          onLocationChange={onLocationChange}
        />
      );
    });

    return <ul className="cat-list__subcat">{categoryListing}</ul>;
  }

  render() {
    const { categories, onLocationChange } = this.props;

    const categoryListing = categories.map((item: any, index: number) => {
      const { id, name, count, description, subCategories } = item;

      return (
        <CategoryGroup
          key={index}
          category={item}
          onLocationChange={onLocationChange}
        >
          {subCategories.length > 0 && this.renderSubCategory(subCategories)}
        </CategoryGroup>
      );
    });

    return <ul className="cat-list__subcat">{categoryListing}</ul>;
  }
}
