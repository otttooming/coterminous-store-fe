const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const QUERY_PRODUCT_LIST = `
    query productList($after: String) {
      cms {
        products(first: 100 after: $after, where: { stockStatus: IN_STOCK }) {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    }
  `;

  const { data: initialResponse } = await graphql(QUERY_PRODUCT_LIST);
  let data = initialResponse;

  let productList = [...data.cms.products.edges];

  while (data.cms.products.pageInfo.hasNextPage) {
    const { data: newResponse } = await graphql(QUERY_PRODUCT_LIST, {
      after: data.cms.products.pageInfo.endCursor,
    });

    data = newResponse;

    productList = [...productList, ...data.cms.products.edges];
  }

  productList.forEach((edge) => {
    actions.createPage({
      path: edge.node.slug,
      component: path.resolve(`./src/templates/product/Product.tsx`),
      context: {
        id: edge.node.id,
      },
    });
  });

  const QUERY_PRODUCT_CATEGORIES = `
    query productCategories {
      cms {
        productCategories {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    }
  `;

  const { data: productCategories } = await graphql(QUERY_PRODUCT_CATEGORIES);

  productCategories.cms.productCategories.edges.forEach((category) => {
    actions.createPage({
      path: category.node.slug,
      component: path.resolve(`./src/templates/category/Category.tsx`),
      context: {
        id: category.node.id,
      },
    });
  });
};
