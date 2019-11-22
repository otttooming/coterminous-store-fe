import { combineReducers } from 'redux';
import productsListingLayerReducer, {
  ProductsListingLayerState,
} from '../layers/productsListingLayer/productsListingLayerReducer';

const rootReducer = combineReducers({
  productsListingLayerReducer,
});

export interface GlobalState {
  productsListingLayerReducer: ProductsListingLayerState;
}

export default rootReducer;
