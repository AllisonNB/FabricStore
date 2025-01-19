import { useState } from "react";
import Modal from "./UI/Modal";
import classes from "./Cart.module.css";

interface CartProps {
  isCartOpen: boolean;
  toggleModal: () => void;
}

const Cart = ({ isCartOpen, toggleModal }: CartProps) => {
  return (
    <Modal open={isCartOpen}>
      <div>
        <h2 className={classes.title}>Your cart</h2>
        <ul>
          <li className={classes.cartItems}>
            <p>Name - Quantity X price</p>
            <p>
              <button>-</button>
              <span># QTY</span>
              <button>+</button>
            </p>
          </li>
        </ul>
        <p>price total</p>
        <p>
          <button onClick={toggleModal}>Close</button>
          <button>Go to Checkout</button>
        </p>
      </div>
    </Modal>
  );
};

export default Cart;
