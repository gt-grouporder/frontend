import React from 'react';

const OrdersList = ({ orders }) => {
  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <p>Order Name: {order.orderName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersList;