import React from 'react';
import './OrdersList.css';
import Navbar from './Navbar';

const OrdersList = ({ orders }) => {
  return (
    <div>
      <Navbar />
      <div className = "orders-container">
        <h1 className = "orders-title"> Order List </h1>
        <ul className = "orders-list">
          {orders.map((order, index) => (
            <li key={index} className = "order-item">
              <p className="order-name"> Order Name: {order.orderName} </p>
            </li>
          ))}
        </ul>
        <button className = "invite-button"> Invite Users </button>
      </div>
    </div>
  );
}

export default OrdersList;