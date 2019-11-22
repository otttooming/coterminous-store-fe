import * as React from 'react';
import { CreateOrderResponse } from '../../../common/woocommerce/typings';

interface Props {
  order: CreateOrderResponse | undefined;
}

const CustomerDetails = ({ order }: Props) => {
  if (!order) {
    return null;
  }

  const {
    first_name,
    last_name,
    email,
    phone,
    address_1,
    city,
    country,
  } = order.billing;

  const name = `${first_name} ${last_name}`;
  const address = `${address_1}, ${city}, ${country}`;

  return (
    <section className="woocommerce-customer-details">
      <h2>Kliendi andmed</h2>

      <table className="woocommerce-table woocommerce-table--customer-details shop_table customer_details">
        <tbody>
          <tr>
            <th>E-post:</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Telefon:</th>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>

      <h3 className="woocommerce-column__title">Arveaadress</h3>

      <address>
        {name}
        <br />
        {address}
      </address>
    </section>
  );
};

export default CustomerDetails;
