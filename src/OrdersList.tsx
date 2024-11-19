import React from 'react';
import './OrdersList.css';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

const OrdersList = () => {
  const [orders, setOrders] = useState([])

  const token = localStorage.getItem("token")

  useEffect(() => {
    fetch('http://localhost:3000/api/fetchOrders', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then((response) => response.json()) 
      .then(({orders}) => {
        setOrders(orders)
      })
  }, [])

  return (
    <div>
      {!token && <Navigate to='/Login' />}
      <Navbar />
      <div className = "orders-container">
        <h1 className = "orders-title"> Order List </h1>
        <ul className = "orders-list">
          {orders.map((order, index) => (
            <li key={index} className = "order-item">
              <p className="order-name"> Order Name: {order.title} </p>
            </li>
          ))}
        </ul>
        <button className = "invite-button"> Invite Users </button>
      </div>
    </div>
  );
}

export default OrdersList;