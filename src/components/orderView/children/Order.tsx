import * as React from "react";
import { CreateOrderResponse } from "../../../common/woocommerce/typings";
import { LocationChangeProps } from "../../../common/products/typings";
import CustomerDetails from "./CustomerDetails";

interface Props {
  order: CreateOrderResponse | undefined;
  onLocationChange?: (props: LocationChangeProps) => void;
}

const Order = ({ order }: Props) => {
  if (!order) {
    return null;
  }

  return (
    <div className="col-xs-12 grid_content with-sidebar-top cfx">
      <div className="woocommerce">
        <div className="woocommerce-thankyou-order-received woocommerce-message">
          Aitäh! Sinu tellimus on vastu võetud.
        </div>
        <div className="bg__common p1 mb1">
          <h2>Tellimus</h2>
          <ul className="woocommerce-thankyou-order-details order_details list list-reset">
            <li className="woocommerce-order-overview__order order">
              Tellimuse number: <strong>{order.id}</strong>
            </li>
            <li className="woocommerce-order-overview__date date">
              Kuupäev:{" "}
              <strong>
                {new Date(order.date_created).toLocaleDateString("ee-est", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </strong>
            </li>
            <li className="woocommerce-order-overview__total total">
              Kokku:{" "}
              <strong>
                <span className="price__block">
                  {order.total + order.currency}
                </span>
              </strong>
            </li>
            <li className="woocommerce-order-overview__payment-method method">
              Makseviis: <strong>Pangaülekanne</strong>
            </li>
          </ul>
        </div>
        <div className="bg__common p1 mb1">
          <p>
            Maksmiseks saate teha pangaülekande meie kontole. Palun kasutage oma
            tellimuse ID numbrit makse selgituseks. Teie tellimust ei saadeta
            enne makse sooritamist.
          </p>
          <section className="woocommerce-bacs-bank-details">
            <h2 className="wc-bacs-bank-details-heading">Meie panga andmed</h2>
            <h3 className="wc-bacs-bank-details-account-name">
              OÜ Aara Kaubandus:
            </h3>
            <ul className="wc-bacs-bank-details order_details bacs_details">
              <li className="bank_name">
                Pank: <strong>Swedbank</strong>
              </li>
              <li className="account_number">
                Konto number: <strong>EE682200221059819115</strong>
              </li>
              <li className="sort_code">
                Panga kood: <strong>22</strong>
              </li>
              <li className="iban">
                IBAN: <strong>EE682200221059819115</strong>
              </li>
              <li className="bic">
                BIC: <strong>HABAEE2X</strong>
              </li>
            </ul>
          </section>{" "}
        </div>
        <div className="bg__common p1 mb1">
          <section className="woocommerce-order-details">
            <h2 className="woocommerce-order-details__title">
              Tellimuse andmed
            </h2>
            <table className="woocommerce-table woocommerce-table--order-details shop_table order_details">
              <thead>
                <tr>
                  <th className="woocommerce-table__product-name product-name">
                    Toode
                  </th>
                  <th className="woocommerce-table__product-table product-total">
                    Kokku
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="woocommerce-table__line-item order_item">
                  <td className="woocommerce-table__product-name product-name">
                    <a href="http://spiceflow.net.ee/pood/doc-johnson-american-bombshell-ballistic/">
                      Doc Johnson American Bombshell Ballistic
                    </a>{" "}
                    <strong className="product-quantity">× 1</strong>{" "}
                  </td>
                  <td className="woocommerce-table__product-total product-total">
                    <span className="price__block">65€</span>{" "}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Vahesumma:</th>
                  <td>
                    <span className="price__block">65€</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Transport:</th>
                  <td>Tasuta transport</td>
                </tr>
                <tr>
                  <th scope="row">Makseviis:</th>
                  <td>Pangaülekanne</td>
                </tr>
                <tr>
                  <th scope="row">Kokku:</th>
                  <td>
                    <span className="price__block">65€</span>
                  </td>
                </tr>
              </tfoot>
            </table>
            <CustomerDetails order={order} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Order;
