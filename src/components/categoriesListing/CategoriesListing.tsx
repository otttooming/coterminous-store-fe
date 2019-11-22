import * as React from 'react';
import CategoryGroup from './children/CategoryGroup';
import SubCategories from './children/SubCategoriesListing';
import { LocationChangeProps } from '../../common/products/typings';

interface Props {
  categories: CategoryProps[];
  onLocationChange?: (props: LocationChangeProps) => void;
}

export interface CategoryProps {
  id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
  subCategories: any;
}

export default class CategoriesListing extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { categories, onLocationChange } = this.props;

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
          onLocationChange={onLocationChange}
          controls={isSubCategoriesPopulated}
        >
          {subCategories.length > 0 && (
            <SubCategories
              categories={subCategories}
              onLocationChange={onLocationChange}
            />
          )}
        </CategoryGroup>
      );
    });

    return <ul className="menu">{categoriesListing}</ul>;
  }
}
