import { useState } from 'react';
import styles from './Cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cartItems }) => {
  return (
    <div className={styles.cart}>
      <FontAwesomeIcon icon={faCartShopping} />
      {cartItems.length}
    </div>
  );
};

export default Cart;
