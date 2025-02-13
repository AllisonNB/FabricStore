import Modal from "./UI/Modal";
import Button from "./UI/Button";
import classes from "./Cart.module.css";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { addItem, removeItem } from "../store/cartSlice";

interface CartProps {
  isCartOpen: boolean;
  toggleModal: () => void;
}

const Cart = ({ isCartOpen, toggleModal }: CartProps) => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  console.log(items, "cart items");

  return (
    <Modal open={isCartOpen}>
      <div>
        <h2 className={classes.title}>Your cart</h2>
        <ul>
          {items.map((item, index) => (
            <li className={classes.cartItem} key={index}>
              <img src={item.image} alt="fabric swatch" />
              <div className={classes.cartContent}>
                <h3>{item.name}</h3>
                <p>${item.quantities.cost} / yard</p>
                <div>
                  <Button onClick={() => dispatch(removeItem(item))}>-</Button>
                  <span>{item.quantities.amount} yards</span>
                  <Button onClick={() => dispatch(addItem(item))}>+</Button>
                  <Button className={classes.removeButton}>Remove</Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className={classes.totalPrice}>Total: {totalPrice.toFixed(2)}</p>
        <p className={classes.cartActions}>
          <Button onClick={toggleModal}>Close</Button>
        </p>
      </div>
    </Modal>
  );
};

export default Cart;
