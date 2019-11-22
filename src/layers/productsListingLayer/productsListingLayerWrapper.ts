import { connect } from 'react-redux';
import { setProductsListing } from './productsListingLayerActions';
import ProductsListingLayer, {
  DispatchProps,
  StateProps,
} from './ProductsListingLayer';
import { GlobalState } from '../../reducers';
import { selectProductListing } from './productsListingLayerSelectors';

const mapStateToProps = (state: GlobalState): StateProps => {
  return {
    productsListing: selectProductListing(state),
  };
};

const mapDispatchToProps: DispatchProps = {
  setProductsListing,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsListingLayer);
