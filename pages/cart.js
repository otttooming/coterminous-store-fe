import React from 'react'
import Page from '../layouts/main'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { initStore, startClock, addCount, store, addToCart, removeFromCart, serverRenderClock } from '../store'

class CartPage extends React.Component {
  static async getInitialProps() {
    return {}
  }

  constructor(props) {
    super(props)
  }


  removeFromCart = (item) => {
    this.props.removeFromCart(item)
  }

  render() {
    let listCartItems = this.props.cartItems.map((item) =>
      <tr className="cart_table_item">
        {/* The thumbnail */}
        <td className="cart__thumbnail cart_del_column visible-desktop">
          <a href="https://www.aadliaare.ee/en/pood/devil-sticks-handcuffs/">
            {item !== null && !!item.image &&
              <img width={73} height={100} className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image lazyloaded" alt sizes="(max-width: 73px) 100vw, 73px"
                src={item !== null && !!item.image ? item.image.src : ''}
              />
            }
          </a>
        </td>
        {/* Product Name */}
        <td className="product-name">
          <a href="https://www.aadliaare.ee/en/pood/devil-sticks-handcuffs/">{item !== null && !!item.name ? item.name : ''}</a><dl className="variation">
            <dt className="variation-Color">Color:</dt>
            <dd className="variation-Color"><p>Red</p>
            </dd>
          </dl>
        </td>
        {/* Product price */}
        <td className="product-price cart_del_column">
          <span className="price__block">{item !== null && !!item.price ? `${item.price}€` : ''}</span>					</td>
        {/* Quantity inputs */}
        <td className="product-quantity" id="cart-quantity">
          <div className="qty-block quantity"><input name="cart[a23ace9d76faf5405d7cbf121471ecb6][qty]" type="number" data-min data-max={5} defaultValue={1} size={4} title="Qty" className="input-text qty text" maxLength={12} /></div>					</td>
        {/* Product subtotal */}
        <td className="product-subtotal">
          <span className="price__block">25€</span>					</td>
        {/* Remove from cart link */}
        <td className="product-remove cart_del_column">
          <a href="#" className="delete-btn" title="Remove this item" onClick={() => this.removeFromCart(item)}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 149.337 149.337"><path fill="currentColor" d="M149.337 143.96L80.044 74.668l69.292-69.292L143.96 0 74.668 69.292 5.378 0 0 5.376l69.292 69.292L0 143.96l5.376 5.376 69.292-69.292 69.293 69.292z" /></svg></a>					</td>
      </tr>
    )
    return (
      <Page title='Cart'>

        <div className="container container__content">
          <div className="row">
            <div className="col-xs-12 grid_content with-sidebar-top cfx">
              <div className>
                <div className="woocommerce">
                  <form action="https://www.aadliaare.ee/en/ostukorv/" method="post" className="cart__form bg__common p1 mb1">
                    <h2>Cart</h2>
                    <table className="cart table checkout_cart" cellSpacing={0} style={{ marginBottom: 20 }}>
                      <thead className="cart__form-head">
                        <tr>
                          <th className="product-thumbnail cart_del_column visible-desktop">&nbsp;</th>
                          <th className="product-name">Product</th>
                          <th className="product-price cart_del_column">Price</th>
                          <th className="product-quantity">Qty</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove cart_del_column">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody className="cart__form-body">
                        {listCartItems}
                      </tbody>
                    </table>
                    <div className="mb1">
                      <input type="submit" className="button update-button" name="update_cart" defaultValue="Update Cart" />
                      <input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="8a921890b7" /><input type="hidden" name="_wp_http_referer" defaultValue="/en/ostukorv/" /></div>
                    <hr />
                    <div className="wc-proceed-to-checkout">
                      <a href="checkout/" className="checkout-button button alt wc-forward">
                        Proceed to Checkout</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => (
  {
    cartItems: state.storeReducer.cartItems
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: bindActionCreators(removeFromCart, dispatch),
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(CartPage)