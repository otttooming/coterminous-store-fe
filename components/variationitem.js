import React from 'react'
import Media from '../components/media'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { initStore, startClock, addCount, store, addToCart, removeFromCart, serverRenderClock } from '../store'

class VariationItems extends React.Component {
  constructor(props) {
    super(props)
  }

  addToCart = (id) => {
    this.props.addToCart(id)
  }

  removeFromCart = () => {
    this.props.removeFromCart('2')
  }

  render() {
    let items = this.props.variations.map((item) =>
      <div className="product-variations__item">
        <div className="description" />
        {!!item.attributes[0].name &&
          <div className="product-variations__attribute"><span>{item.attributes[0].name}: {item.attributes[0].option}</span></div>
        }
        <div className="product-variations__price ">
          <span className="price__block">{item.price}€</span>
        </div>
        <div className="form">
          <div className="product-variations__cart addto" action="https://www.aadliaare.ee/en/pood/pretty-love-uriah-vincent/" method="post" encType="multipart/form-data">
            <div className="product-qty__wrap qty-block" id="product-quantity">
              <label className="qty-block__title">Quantity</label>
              <input type="number" step={1} min={1} max={3} name="quantity" defaultValue={1} title="Qty" className="qty-block__input input-text qty text" size={4} />
            </div>
            <label className="button medium active" onClick={() => this.addToCart(item)}>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="addto__icon"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" fill="currentColor" /></svg>
              {/*<input type="submit" name defaultValue visibility="hidden" style={{ display: 'none' }} />*/}
              Add to cart
            </label>
            <input type="hidden" name="attribute_pa_variant" defaultValue="uriah" />
            <input type="hidden" name="variation_id" defaultValue={20712} />
            <input type="hidden" name="product_id" defaultValue={20711} />
            <input type="hidden" name="add-to-cart" defaultValue={20711} />
          </div>
        </div>
      </div>
    );

    return (
      <div className="product-variations">{items}</div>
    );
  }
}

const mapStateToProps = ({ cartItems }) => ({ cartItems })

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    addToCart: bindActionCreators(addToCart, dispatch),

  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(VariationItems)