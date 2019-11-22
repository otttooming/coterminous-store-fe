import * as React from 'react';
import {
  ProductsListingComponent,
  ProductsListingVariables,
  ProductsListingQuery,
  ProductsListingHOC,
} from '../../generated-models';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ApolloConsumer, withApollo } from 'react-apollo';
// import { apolloRoot } from '../../lib/withApollo';

interface Props {
  variables?: ProductsListingVariables;
}

export interface StateProps {
  productsListing: ProductsListingQuery | null;
}

export interface DispatchProps {
  setProductsListing: (data: ProductsListingQuery) => void;
}

export type ProductsListingLayerProps = Props & StateProps & DispatchProps;

interface InternalState {}

class ProductsListingLayer extends React.Component<
  ProductsListingLayerProps,
  InternalState
> {
  constructor(props) {
    super(props);
    props.setProductsListing(props.client);
    // props.setProductsListing(props.client);
  }

  componentDidMount() {
    this.props.setProductsListing(this.props.client);
  }

  render() {
    const {
      variables,
      children,
      productsListing,
      setProductsListing,
    } = this.props;

    return (
      <ProductsListingComponent variables={variables}>
        {({ loading, data, error }) => {
          if (typeof children === 'function') {
            return (
              <div>
                <button onClick={() => setProductsListing(data)}>abc</button>
                {children(this.props.productsListing)}
                {/* {children(data.productsListing)} */}
              </div>
            );
          }

          return children;
        }}
      </ProductsListingComponent>
    );
  }

  //   return (
  //     <ProductsListingComponent variables={variables}>
  //       {({ loading, data, error }) => {
  //         if (typeof children === 'function') {
  //           return (
  //             <div>
  //               <button onClick={() => setProductsListing(data)}>abc</button>
  //               {children(this.props.productsListing)}
  //               {/* {children(data.productsListing)} */}
  //             </div>
  //           );
  //         }

  //         return children;
  //       }}
  //     </ProductsListingComponent>
  //   );
  // }
}

// const withHOC: React.FC<any> = props => {
//   const {
//     options: { variables },
//   } = props;

//   return (
//     <ApolloConsumer>
//       {client => (
//         <ProductsListingComponent
//           client={client}
//           variables={variables}
//           onCompleted={val => console.log('comp', val)}
//           onError={val => console.log('comp', val)}
//         >
//           {passedProps => <ProductsListingLayer {...props} {...passedProps} />}
//         </ProductsListingComponent>
//       )}
//     </ApolloConsumer>
//   );
// };

export default connect()(withApollo(ProductsListingLayer));
