import { graphql } from "gatsby";
import * as React from "react";
import Main from "../layouts/Main";
import { IndexQueryQuery } from "../types";
import ProductList from "../components/productList/ProductList";

interface IndexPageProps {
  data: IndexQueryQuery;
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      products(where: { stockStatus: IN_STOCK }) {
        edges {
          node {
            ...ProductForListing
          }
        }
      }
    }
  }
`;

class Index extends React.Component<IndexPageProps, {}> {
  public render() {
    const { data } = this.props;

    return (
      <Main>
        <ProductList title="Product list" products={data.cms.products} />
      </Main>
    );
  }
}

export default Index;
