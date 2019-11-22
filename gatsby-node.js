const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const QUERY_PRODUCT_LIST = `
    query productList($after: String) {
      cms {
        products(first: 100 after: $after) {
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

  const productList = [data.cms.products.edges];

  while (data.cms.products.pageInfo.hasNextPage) {
    const { data: newResponse } = await graphql(QUERY_PRODUCT_LIST, {
      after: data.cms.products.pageInfo.endCursor,
    });

    data = newResponse;

    productList.push(data.cms.products.edges);
  }

  productList.forEach(chunk => {
    chunk.forEach(blog => {
      actions.createPage({
        path: blog.node.slug,
        component: path.resolve(`./src/templates/product/Product.tsx`),
        context: {
          id: blog.node.id,
        },
      });
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

  productCategories.cms.productCategories.edges.forEach(category => {
    actions.createPage({
      path: category.node.slug,
      component: path.resolve(`./src/templates/category/Category.tsx`),
      context: {
        id: category.node.id,
      },
    });
  });
};
