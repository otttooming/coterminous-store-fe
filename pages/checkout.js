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

function getTitleFromArray(id, shippingMethods) {
  function idMatch(element) {
    return element.id === id;
  }

  const result = shippingMethods.find(idMatch)

  return result.title;
}

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

    let items = []

    this.props.cartItems.map(item => { items.push({ product_id: item.id, quantity: 1 }) })

    let order = {
      payment_method: values.payment_method,
      payment_method_title: getTitleFromArray(values.payment_method, this.props.paymentGateways),
      set_paid: false,
      billing: {
        first_name: values.first_name,
        last_name: values.last_name,
        address_1: values.address_1,
        city: values.city,
        postcode: values.postcode,
        country: "estonia",
        phone: values.phone
      },
      line_items: items,
      shipping_lines: [
        {
          method_id: values.shipping_method,
          method_title: getTitleFromArray(parseInt(values.shipping_method), this.props.shippingMethods),
          total: 0
        }
      ]
    }

    console.log(order);


    api.createOrder(order, { consumerKey: 'ck_27c96da6c28aa2d9022ef35d824607189f76b549', consumerSecret: 'cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9' })
      .then(response => {
        window.location.href = `/order/${response.id}`
      });


// var data = JSON.stringify({
//   "payment_method": "bacs",
//   "payment_method_title": "Direct Bank Transfer",
//   "set_paid": true,
//   "billing": {
//     "first_name": "John",
//     "last_name": "Doe",
//     "address_1": "969 Market",
//     "address_2": "",
//     "city": "San Francisco",
//     "state": "CA",
//     "postcode": "94103",
//     "country": "US",
//     "email": "john.doe@example.com",
//     "phone": "(555) 555-5555"
//   },
//   "shipping": {
//     "first_name": "John",
//     "last_name": "Doe",
//     "address_1": "969 Market",
//     "address_2": "",
//     "city": "San Francisco",
//     "state": "CA",
//     "postcode": "94103",
//     "country": "US"
//   },
//   "line_items": [
//     {
//       "product_id": 93,
//       "quantity": 2
//     },
//     {
//       "product_id": 22,
//       "variation_id": 23,
//       "quantity": 1
//     }
//   ],
//   "shipping_lines": [
//     {
//       "method_id": "flat_rate",
//       "method_title": "Flat Rate",
//       "total": 10
//     }
//   ]
// });
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