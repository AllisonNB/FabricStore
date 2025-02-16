import Modal from "./UI/Modal";
import Button from "./UI/Button";
import classes from "./Cart.module.css";

import { useSelector, useDispatch } from "react-redux";
import { cartItem } from "../types/cartItems";
import { RootState } from "../store/index";
import {
  removeItem,
  addSelectedItemAmount,
  removeSelectedItemAmount,
} from "../store/cartSlice";

interface CartProps {
  isCartOpen: boolean;
  toggleModal: () => void;
}

const calculateTotalPrice = (items: cartItem[]): string => {
  const itemPricesArray = items.map(
    (item) => item.quantities?.amount * item.quantities?.cost
  );

  return itemPricesArray.reduce((a, b) => a + b, 0).toFixed(2);
};

const Cart = ({ isCartOpen, toggleModal }: CartProps) => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

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
                  <Button
                    onClick={() =>
                      dispatch(
                        removeSelectedItemAmount({
                          amount: 0.25,
                          productId: item.productId,
                        })
                      )
                    }
                  >
                    -
                  </Button>
                  <span>{item.quantities.amount} yards</span>
                  <Button
                    onClick={() =>
                      dispatch(
                        addSelectedItemAmount({
                          amount: 0.25,
                          productId: item.productId,
                        })
                      )
                    }
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => dispatch(removeItem(item))}
                    className={classes.removeButton}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className={classes.totalPrice}>
          Total: {calculateTotalPrice(items)}
        </p>
        <p className={classes.cartActions}>
          <Button onClick={toggleModal}>Close</Button>
        </p>
      </div>
    </Modal>
  );
};

export default Cart;
