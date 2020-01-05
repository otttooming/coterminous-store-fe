import * as React from "react";
import { graphql } from "gatsby";
import Main from "../../layouts/Main";
import { CategoryTemplateQuery } from "../../types";
import ProductList from "../../components/productList/ProductList";

interface Props {
  data: CategoryTemplateQuery;
}

const CategoryTemplate: React.FC<Props> = ({ data }) => {
  return (
    <Main>
      <ProductList
        title="Category"
        products={data.cms.productCategory?.products}
      />
    </Main>
  );
};

export const query = graphql`
  query CategoryTemplate($id: ID!) {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      productCategory(id: $id) {
        name
        products(where: { stockStatus: IN_STOCK }) {
          edges {
            node {
              ...ProductForListing
            }
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
