import Modal from "./UI/Modal";
import Button from "./UI/Button";
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
              <Button>-</Button>
              <span># QTY</span>
              <Button>+</Button>
            </p>
          </li>
        </ul>
        <p>price total</p>
        <p>
          <Button onClick={toggleModal}>Close</Button>
          <Button>Go to Checkout</Button>
        </p>
      </div>
    </Modal>
  );
};

export default Cart;
