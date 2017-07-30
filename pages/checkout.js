import React from 'react'
import Page from '../layouts/main'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { initStore, startClock, addCount, store, addToCart, removeFromCart, serverRenderClock } from '../store'

import ContactForm from '../components/contactform'

import * as api from '../components/api'

// function getFetchData() {
//   const fetchPaymentGateways = new Promise(
//     resolve => fetch(api.buildUrl({ paths: [api.WC, 'payment_gateways'] })).then(resp => resp.json()).then(data => resolve({ paymentGateways: data}))
//   );
//   const fetchShippingMethods = new Promise(
//     resolve => fetch(api.buildUrl({ paths: [api.WC, 'shipping_methods'] })).then(resp => resp.json()).then(data => resolve({ shippingMethods: data}))
//   );

//   return Promise.all([fetchPaymentGateways, fetchShippingMethods])
//     .then(data => {
//       return { results: data.map(item => item)}
//      })
// }

class CheckoutPage extends React.Component {
  static async getInitialProps() {
    const paymentGateways = await fetch(api.buildUrl({ paths: [api.WC, 'payment_gateways'] })).then(resp => resp.json()).then(data => { return data })
    const shippingMethods = await fetch(api.buildUrl({ paths: [api.WC, 'shipping', 'zones', '1', 'methods'] })).then(resp => resp.json()).then(data => { return data })

    return {
      paymentGateways,
      shippingMethods
    }
  }

  constructor(props) {
    super(props)
  }


  removeFromCart = (item) => {
    this.props.removeFromCart(item)
  }

  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }

  render() {


    return (
      <Page title='Checkout'>

        <div className="container container__content">
          <div className="row">
            <div className="col-xs-12 grid_content with-sidebar-top cfx">
              <ContactForm
                onSubmit={this.submit}
                totalAmount={this.props.totalAmount}
                cartItems={this.props.cartItems}
                paymentGateways={this.props.paymentGateways}
                shippingMethods={this.props.shippingMethods}
              />
            </div>
          </div>
        </div>

      </Page>
    )
  }
}

const mapStateToProps = (state) => (
  {
    cartItems: state.storeReducer.cartItems,
    totalAmount: state.storeReducer.totalAmount,
    contactForm: state.form
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: bindActionCreators(removeFromCart, dispatch),
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(CheckoutPage)