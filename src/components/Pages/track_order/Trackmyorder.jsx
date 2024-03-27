import React, { useState } from 'react';
import axios from 'axios';
import './trackmyorder.css'

function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/orders/${orderNumber}`);
      setTrackingInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="track_order_container">
      <h1 className='track_order_h1'>Track My Order</h1>
      <form className='track_order_form' onSubmit={handleSubmit}>
        <label className='track_order_label' htmlFor="order-number">Order Number:</label>
        <input className='track_order_input'
          type="text"
          id="order-number"
          name="order-number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
        />
        <button className='track_order_button' type="submit">Track</button>
      </form>
      {trackingInfo && (
        <div id="tracking-result">
          <h2 className='track_order_h2'>Tracking Information</h2>
          <p className='track_order_p2'>
            Order Number: <strong>{trackingInfo.orderNumber}</strong>
          </p>
          <p className='track_order_p2'>
            Status: <strong>{trackingInfo.status}</strong>
          </p>
          <p className='track_order_p2'>
            Estimated Delivery: <strong>{trackingInfo.estimatedDelivery}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default TrackOrder;
