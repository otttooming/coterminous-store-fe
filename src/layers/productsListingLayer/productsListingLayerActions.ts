import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import {
  ProductsListingQuery,
  ProductsListingDocument,
} from '../../generated-models';
// import { apolloRoot } from '../../lib/withApollo';

const ns: string = 'productsListing/';

export const setProductsListingRequest = createAction(
  `${ns}SET_PRODUCTS_LISTING_REQUEST`,
);

export const setProductsListing = (apolloRoot: any) => {
  return (dispatch: Dispatch) => {
    // console.log('====================================');
    // console.log('dispatch');
    // console.log('====================================');

    // let promise = new Promise((resolve, reject) => {
    //   setTimeout(() => resolve("done!"), 1000)
    // });

    // let result = await promise; // wait till the promise resolves (*)

    // console.log('====================================');
    // console.log(apolloRoot, 'apolloRoot');
    // console.log('====================================');

    // const data = await apolloRoot.query({ query: ProductsListingDocument });

    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');
    // console.log('====================================');
    // console.log(data.data);
    // console.log('====================================');

    const data = {
      data: {
        productsListing: {
          edges: [
            {
              node: {
                name: 'TEST',
              },
            },
          ],
        },
      },
    };

    dispatch(setProductsListingRequest(data.data.productsListing));
  };
};
