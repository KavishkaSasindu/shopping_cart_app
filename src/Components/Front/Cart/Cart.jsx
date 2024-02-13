/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <div>Card Items Header</div>
      <div>{cartItems.length === 0 && <div>No Items are added!</div>}</div>
      <div>
        {cartItems.map((items) => (
          <div key={items.id}>
            <img src={items.image} alt={items.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
