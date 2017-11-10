import * as React from "react";
import CategoryGroup from "./children/CategoryGroup";
import SubCategories from "./children/SubCategoriesListing";

interface Props {
  categories: CategoryProps[];
  change: (id: number) => void;
}

export interface CategoryProps {
  id: number;
  name: string;
  count: number;
  description: string;
  subCategories: any;
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
      const { id, name, count, description, subCategories } = item;

      const isSubCategoriesPopulated =
        !!subCategories.length &&
        !!subCategories
          .map((subItem: any) => subItem.count)
          .filter((subCount: number) => subCount !== 0).length;

      if (!count) {
        return null;
      }

      return (
        <CategoryGroup
          key={index}
          category={item}
          change={this.handleCategoryChange}
          controls={isSubCategoriesPopulated}
        >
          {subCategories.length > 0 && (
            <SubCategories
              categories={subCategories}
              change={this.handleCategoryChange}
            />
          )}
        </CategoryGroup>
      );
    });

    return <ul className="menu">{categoriesListing}</ul>;
  }
}
