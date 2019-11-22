import { handleActions, Action } from 'redux-actions';
import { setProductsListingRequest } from './productsListingLayerActions';
import { ProductsListingQuery } from '../../generated-models';

class State {
  productsListing: ProductsListingQuery | null = null;
}

export default handleActions<State, any>(
  {
    [setProductsListingRequest.toString()]: (
      state,
      action: Action<ProductsListingQuery>,
    ): State => {
      return {
        ...state,
        productsListing: action.payload,
      };
    },
  },
  new State(),
);

export { State as ProductsListingLayerState };
