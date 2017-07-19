import React from 'react'
import Page from '../layouts/main'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { initStore, startClock, addCount, store, addToCart, removeFromCart, serverRenderClock } from '../store'

import ContactForm from '../components/contactform'

class CheckoutPage extends React.Component {
  static async getInitialProps() {
    return {}
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
              <div className>

                <div className="woocommerce">
                  <div className="woocommerce-info">Have a coupon? <a href="#" className="showcoupon mb1">Click here to enter your code</a></div>
                  <div className="bg__common mb1 p1 checkout_coupon" method="post" style={{ display: 'block' }}>
                    <p className="form-row form-row-first">
                      <input type="text" name="coupon_code" className="input-text" placeholder="Coupon code" id="coupon_code" defaultValue />
                      <input type="submit" className="button" name="apply_coupon" defaultValue="Apply Coupon" />
                    </p>
                  </div>
                  <div name="checkout" method="post" className="checkout woocommerce-checkout" action="https://www.aadliaare.ee/en/kassa/" encType="multipart/form-data">
                    <div className="col2-set bg__common mb1" id="customer_details">
                      <div className="col-1">
                        <div className="woocommerce-billing-fields">
                          <h2>Billing Address</h2>
                          <ContactForm onSubmit={this.submit} />
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="woocommerce-shipping-fields">
                          <h3 id="ship-to-different-address">
                            <label htmlFor="ship-to-different-address-checkbox" className="checkbox">Ship to a different address?</label>
                            <input id="ship-to-different-address-checkbox" className="input-checkbox" type="checkbox" name="ship_to_different_address" defaultValue={1} />
                          </h3>
                          <div className="shipping_address" style={{ display: 'none' }}>
                            <p className="form-row form-row form-row-first validate-required" id="shipping_first_name_field"><label htmlFor="shipping_first_name" className>First Name <abbr className="required" title="required">*</abbr></label><input type="text" className="input-text " name="shipping_first_name" id="shipping_first_name" placeholder autoComplete="given-name" defaultValue /></p>
                            <p className="form-row form-row form-row-last validate-required" id="shipping_last_name_field"><label htmlFor="shipping_last_name" className>Last Name <abbr className="required" title="required">*</abbr></label><input type="text" className="input-text " name="shipping_last_name" id="shipping_last_name" placeholder autoComplete="family-name" defaultValue /></p><div className="clear" />
                            <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="shipping_country_field"><label htmlFor="shipping_country" className>Country <abbr className="required" title="required">*</abbr></label><strong>Estonia</strong><input type="hidden" name="shipping_country" id="shipping_country" defaultValue="EE" className="country_to_state" /></p>
                            <p className="form-row form-row form-row-wide address-field validate-required" id="shipping_address_1_field"><label htmlFor="shipping_address_1" className>Address <abbr className="required" title="required">*</abbr></label><input type="text" className="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="Street address" autoComplete="address-line1" defaultValue /></p>
                            <p className="form-row form-row form-row-wide address-field" id="shipping_address_2_field"><input type="text" className="input-text " name="shipping_address_2" id="shipping_address_2" placeholder="Apartment, suite, unit etc. (optional)" autoComplete="address-line2" defaultValue /></p>
                            <p className="form-row form-row address-field validate-required validate-postcode form-row-first" id="shipping_postcode_field" data-o_class="form-row form-row form-row-last address-field validate-required validate-postcode"><label htmlFor="shipping_postcode" className>Postcode / ZIP <abbr className="required" title="required">*</abbr></label><input type="text" className="input-text " name="shipping_postcode" id="shipping_postcode" placeholder autoComplete="postal-code" defaultValue /></p><p className="form-row form-row address-field validate-required form-row-last" id="shipping_city_field" data-o_class="form-row form-row form-row-wide address-field validate-required"><label htmlFor="shipping_city" className>Town / City <abbr className="required" title="required">*</abbr></label><input type="text" className="input-text " name="shipping_city" id="shipping_city" placeholder autoComplete="address-level2" defaultValue /></p>
                            <p className="form-row form-row address-field validate-state form-row-first" id="shipping_state_field" style={{ display: 'none' }} data-o_class="form-row form-row form-row-first address-field validate-state"><label htmlFor="shipping_state" className>State / County</label><input type="hidden" className="hidden" name="shipping_state" id="shipping_state" defaultValue placeholder /></p>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="wc-order-comments">
                          <h2>Additional Information</h2>
                          <p className="form-row form-row notes" id="order_comments_field"><label htmlFor="order_comments" className>Order Notes</label><textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows={2} cols={5} defaultValue={""} /></p>
                        </div>
                      </div>
                    </div>
                    <div id="order_review" className="woocommerce-checkout-review-order">
                      <div className="bg__common p1 mb1">
                        <h2 id="order_review_heading">Your order</h2>
                        <table className="shop_table checkout_cart table woocommerce-checkout-review-order-table mb1">
                          <thead className="cart__form-head">
                            <tr>
                              <th className="product-name">Product</th>
                              <th className="product-total">Total</th>
                            </tr>
                          </thead>
                          <tbody className="cart__form-body">
                            <tr className="cart_item">
                              <td className="cart__product-name">
                                <a href="https://www.aadliaare.ee/en/pood/devil-sticks-handcuffs/" className="cart__thumbnail"><img width={73} height={100} className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image lazyloaded" alt sizes="(max-width: 73px) 100vw, 73px" data-src="https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-73x100.jpg" data-srcset="https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1.jpg 1135w" srcSet="https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1.jpg 1135w" src="https://www.aadliaare.ee/wp-content/uploads/2014/12/cuffs1-73x100.jpg" /></a>
                                <a href="https://www.aadliaare.ee/en/pood/devil-sticks-handcuffs/">Devil Sticks Handcuffs</a><dl className="variation">
                                  <dt className="variation-Color">Color:</dt>
                                  <dd className="variation-Color"><p>Red</p>
                                  </dd>
                                </dl>
                                x1  					</td>
                              <td className="product-total">
                                <span className="price__block">25€</span>						</td>
                            </tr>
                          </tbody>
                          <tfoot className="cart__form-footer">
                            <tr className="cart-subtotal">
                              <th>Subtotal</th>
                              <td className="right-align"><span className="price__block">25€</span></td>
                            </tr>
                            <tr className="shipping">
                              <th>Shipping</th>
                              <td data-title="Shipping">
                                <ul id="shipping_method">
                                  <li>
                                    <input type="radio" name="shipping_method[0]" data-index={0} id="shipping_method_0_smartpost_estonia" defaultValue="smartpost_estonia" className="shipping_method" defaultChecked="checked" />
                                    <label htmlFor="shipping_method_0_smartpost_estonia">Smartposti Pakiautomaadid: <span className="price__block">1,50€</span></label>					</li>
                                  <li>
                                    <input type="radio" name="shipping_method[0]" data-index={0} id="shipping_method_0_smartpost_courier" defaultValue="smartpost_courier" className="shipping_method" />
                                    <label htmlFor="shipping_method_0_smartpost_courier">SmartKULLER: <span className="price__block">5€</span></label>					</li>
                                  <li>
                                    <input type="radio" name="shipping_method[0]" data-index={0} id="shipping_method_0_omniva_parcel_machines_ee" defaultValue="omniva_parcel_machines_ee" className="shipping_method" />
                                    <label htmlFor="shipping_method_0_omniva_parcel_machines_ee">Omniva Pakiautomaadid: <span className="price__block">1,50€</span></label>					</li>
                                </ul>
                              </td>
                            </tr>
                            <tr className="wc_shipping_smartpost">
                              <th><label htmlFor="wc_shipping_smartpost_estonia_terminal">Choose terminal</label></th>
                              <td>
                                <select name="wc_shipping_smartpost_estonia_terminal" id="wc_shipping_smartpost_estonia_terminal">
                                  <option value selected="selected">- Choose terminal -</option>
                                  <optgroup label="Elva">
                                    <option value={144}>Elva mini-Rimi</option>
                                  </optgroup>
                                  <optgroup label="Haapsalu">
                                    <option value={167}>Haapsalu Rimi</option>
                                  </optgroup>
                                  <optgroup label="Harjumaa">
                                    <option value={179}>Peetri Selver</option>
                                  </optgroup>
                                  <optgroup label="Jõgeva">
                                    <option value={111}>Jõgeva Kaubahall</option>
                                  </optgroup>
                                  <optgroup label="Jõhvi">
                                    <option value={184}>Jõhvi Grossi Toidukaubad</option>
                                    <option value={108}>Jõhvi Tsentraal</option>
                                  </optgroup>
                                  <optgroup label="Jüri">
                                    <option value={183}>Jüri Konsum</option>
                                  </optgroup>
                                  <optgroup label="Keila">
                                    <option value={134}>Keila Selver</option>
                                  </optgroup>
                                  <optgroup label="Kohtla-Järve">
                                    <option value={198}>Ahtme Maxima</option>
                                    <option value={131}>Kohtla-Järve Vironia Keskus </option>
                                  </optgroup>
                                  <optgroup label="Kuressaare">
                                    <option value={157}>Kuressaare Kihelkonna mini-Rimi</option>
                                    <option value={116}>Kuressaare Saare Selver</option>
                                  </optgroup>
                                  <optgroup label="Kärdla">
                                    <option value={115}>Kärdla Selver</option>
                                  </optgroup>
                                  <optgroup label="Laagri">
                                    <option value={133}>Laagri Maksimarket</option>
                                  </optgroup>
                                  <optgroup label="Maardu">
                                    <option value={161}>Maardu Maxima</option>
                                  </optgroup>
                                  <optgroup label="Märjamaa">
                                    <option value={145}>Märjamaa mini-Rimi</option>
                                  </optgroup>
                                  <optgroup label="Narva">
                                    <option value={109}>Narva Astri Keskus</option>
                                    <option value={181}>Narva Prisma</option>
                                  </optgroup>
                                  <optgroup label="Otepää">
                                    <option value={149}>Otepää Maxima</option>
                                  </optgroup>
                                  <optgroup label="Paide">
                                    <option value={182}>Paide Maksimarket</option>
                                    <option value={112}>Paide Selver</option>
                                  </optgroup>
                                  <optgroup label="Pärnu">
                                    <option value={117}>Pärnu Kaubamajakas</option>
                                    <option value={130}>Pärnu Keskus</option>
                                    <option value={189}>Pärnu Mai Selver</option>
                                    <option value={173}>Pärnu Maksimarket</option>
                                    <option value={158}>Pärnu Maxima XXX</option>
                                    <option value={127}>Pärnu Ülejõe Selver</option>
                                  </optgroup>
                                  <optgroup label="Põltsamaa">
                                    <option value={123}>Põltsamaa Selver</option>
                                  </optgroup>
                                  <optgroup label="Põlva">
                                    <option value={128}>Põlva Edu Keskus</option>
                                  </optgroup>
                                  <optgroup label="Rakvere">
                                    <option value={110}>Rakvere Kroonikeskus</option>
                                    <option value={152}>Rakvere Põhjakeskus</option>
                                  </optgroup>
                                  <optgroup label="Rapla">
                                    <option value={113}>Rapla Maxima</option>
                                    <option value={190}>Rapla Selver</option>
                                  </optgroup>
                                  <optgroup label="Saku">
                                    <option value={156}>Saku Selver</option>
                                  </optgroup>
                                  <optgroup label="Saue">
                                    <option value={177}>Saue Maxima</option>
                                  </optgroup>
                                  <optgroup label="Sillamäe">
                                    <option value={140}>Sillamäe SK-Market (Konsum)</option>
                                  </optgroup>
                                  <optgroup label="Tabasalu">
                                    <option value={180}>Tabasalu Rimi</option>
                                  </optgroup>
                                  <optgroup label="Tallinn">
                                    <option value={199}>Kärberi Selver</option>
                                    <option value={178}>Muuga Maxima</option>
                                    <option value={193}>Priisle Maxima XXX</option>
                                    <option value={174}>Raudalu Konsum</option>
                                    <option value={200}>Stockmann</option>
                                    <option value={121}>Tallinna Haabersti Rimi</option>
                                    <option value={126}>Tallinna Järve Keskus</option>
                                    <option value={185}>Tallinna Kadaka Selver</option>
                                    <option value={160}>Tallinna Kaubamaja</option>
                                    <option value={146}>Tallinna Kristiine Keskus</option>
                                    <option value={120}>Tallinna Lasnamäe Centrum (RIMI)</option>
                                    <option value={103}>Tallinna Lasnamäe Prisma</option>
                                    <option value={175}>Tallinna Läänemere Selver</option>
                                    <option value={164}>Tallinna Magistrali Keskus</option>
                                    <option value={102}>Tallinna Merimetsa Selver</option>
                                    <option value={195}>Tallinna Mustamäe Keskus</option>
                                    <option value={138}>Tallinna Mustika Prisma</option>
                                    <option value={124}>Tallinna Nõmme Keskus</option>
                                    <option value={125}>Tallinna Pirita Selver</option>
                                    <option value={153}>Tallinna Rocca Al Mare Keskus</option>
                                    <option value={154}>Tallinna Sikupilli Prisma</option>
                                    <option value={141}>Tallinna Smuuli Maxima</option>
                                    <option value={155}>Tallinna Solaris Keskus</option>
                                    <option value={188}>Tallinna Stroomi Keskus</option>
                                    <option value={137}>Tallinna Tondi Selver</option>
                                    <option value={122}>Tallinna Torupilli Selver</option>
                                    <option value={197}>Tallinna Tööstuse RIMI</option>
                                    <option value={187}>Tallinna Ülemiste keskus</option>
                                    <option value={194}>Vilde tee Maxima XX</option>
                                  </optgroup>
                                  <optgroup label="Tapa">
                                    <option value={147}>Tapa Bussijaam</option>
                                  </optgroup>
                                  <optgroup label="Tartu">
                                    <option value={172}>Tartu Aardla Selver</option>
                                    <option value={171}>Tartu Anne Prisma</option>
                                    <option value={106}>Tartu Anne Selver</option>
                                    <option value={150}>Tartu Eeden</option>
                                    <option value={176}>Tartu Kaubamaja</option>
                                    <option value={166}>Tartu Lembitu Konsum</option>
                                    <option value={107}>Tartu Lõunakeskuse Rimi</option>
                                    <option value={163}>Tartu Raadi Maxima</option>
                                    <option value={136}>Tartu Rebase Rimi</option>
                                    <option value={169}>Tartu Ringtee Selver</option>
                                    <option value={135}>Tartu Tasku moe- ja vabaajakeskus</option>
                                    <option value={196}>Tartu Veeriku Selver</option>
                                  </optgroup>
                                  <optgroup label="Tõrva">
                                    <option value={148}>Tõrva Maxima</option>
                                  </optgroup>
                                  <optgroup label="Türi">
                                    <option value={143}>Türi Säästumarket</option>
                                  </optgroup>
                                  <optgroup label="Uuemõisa">
                                    <option value={114}>Rannarootsi Keskus</option>
                                  </optgroup>
                                  <optgroup label="Valga">
                                    <option value={118}>Valga Selver</option>
                                  </optgroup>
                                  <optgroup label="Viimsi">
                                    <option value={139}>Viimsi Kaubanduskeskus</option>
                                    <option value={192}>Viimsi Selver</option>
                                  </optgroup>
                                  <optgroup label="Viljandi">
                                    <option value={101}>Viljandi Männimäe Selver</option>
                                    <option value={191}>Viljandi Turu Konsum</option>
                                    <option value={162}>Viljandi Uku keskus</option>
                                  </optgroup>
                                  <optgroup label="Vändra">
                                    <option value={142}>Vändra Konsum</option>
                                  </optgroup>
                                  <optgroup label="Võru">
                                    <option value={119}>Võru Kagukeskus</option>
                                    <option value={168}>Võru Rimi</option>
                                  </optgroup>
                                </select>
                              </td>
                            </tr>
                            <tr className="order-total">
                              <th>Order Total</th>
                              <td className="right-align"><strong><span className="price__block">{this.props.totalAmount}€</span></strong> </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="bg__common p1 mb1">
                        <div id="payment" className="woocommerce-checkout-payment">
                          <h2 className="mb1">Pay</h2>
                          <ul className="wc_payment_methods payment_methods methods list-style-none">
                            <li className="wc_payment_method payment_method_bacs">
                              <input id="payment_method_bacs" type="radio" className="input-radio" name="payment_method" defaultValue="bacs" defaultChecked="checked" data-order_button_text />
                              <label htmlFor="payment_method_bacs">
                                Pangaülekanne 	</label>
                              <div className="payment_box payment_method_bacs">
                                <p>Tellimuse eest tasumiseks saad teha pangaülekande meie kontole. Palun kirjuta tellimuse number makse selgitusse. Sinu tellimust ei saadeta teele enne makse laekumist meie kontole.</p>
                              </div>
                            </li>
                            <li className="wc_payment_method payment_method_swedbank">
                              <input id="payment_method_swedbank" type="radio" className="input-radio" name="payment_method" defaultValue="swedbank" data-order_button_text />
                              <label htmlFor="payment_method_swedbank">
                                Swedbank <img src="https://www.aadliaare.ee/wp-content/plugins/estonian-banklinks-for-woocommerce/assets/img/swedbank.png" alt="Swedbank" />	</label>
                            </li>
                          </ul>
                          <hr />
                          <div className="form-row place-order">

                            <p className="form-row terms wc-terms-and-conditions">
                              <input type="checkbox" className="input-checkbox" name="terms" id="terms" />
                              <label htmlFor="terms" className="checkbox">I’ve read and accept the <a href="https://www.aadliaare.ee/en/info/kasutustingimused/" target="_blank">terms &amp; conditions</a> <span className="required">*</span></label>
                              <input type="hidden" name="terms-field" defaultValue={1} />
                            </p>
                            <input type="submit" className="button big" name="woocommerce_checkout_place_order" id="place_order" defaultValue="Place order" data-value="Place order" />
                            <input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="34ff1618f0" /><input type="hidden" name="_wp_http_referer" defaultValue="/en/kassa/?wc-ajax=update_order_review" />	</div>
                        </div>
                      </div>
                    </div>
                  </div>
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