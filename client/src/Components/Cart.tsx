import Modal from "./UI/Modal";
import Button from "./UI/Button";
import classes from "./Cart.module.css";

import { useSelector } from "react-redux";
import { RootState } from "../store/index";

interface CartProps {
  isCartOpen: boolean;
  toggleModal: () => void;
}

const Cart = ({ isCartOpen, toggleModal }: CartProps) => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <Modal open={isCartOpen}>
      <div>
        <h2 className={classes.title}>Your cart</h2>
        <ul>
          {items.map((item, index) => (
            <li className={classes.cartItems} key={index}>
              <span>
                {item.name}: ${item.quantities.cost} / yard
              </span>
              <div>
                <Button>-</Button>
                <span>{item.quantities.amount} yards</span>
                <Button>+</Button>
              </div>
            </li>
          ))}
        </ul>
        <p>Total: {totalPrice}</p>
        <p>
          <Button onClick={toggleModal}>Close</Button>
          <Button>Go to Checkout</Button>
        </p>
      </div>
    </Modal>
  );
};

export default Cart;
