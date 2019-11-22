import { GlobalState } from '../../reducers';
import { createSelector } from 'reselect';

export const selectProductListing = (state: GlobalState) =>
  state.productsListingLayerReducer.productsListing;
