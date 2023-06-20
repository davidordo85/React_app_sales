import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Cart = () => {
  const handleEvent = event => {
    alert('In progress');
  };
  return (
    <div style={{ cursor: 'pointer' }}>
      <IoCartOutline onClick={handleEvent} size={32} />
    </div>
  );
};

export default Cart;
