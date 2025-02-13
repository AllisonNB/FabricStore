import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { Fabric } from "../types/fabrics";
import classes from "./QuickAdd.module.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import {
  addItem,
  addSelectedItemAmount,
  removeSelectedItemAmount,
} from "../store/cartSlice";

interface QuickAddProps {
  isQuickAddOpen: boolean;
  toggleModal: () => void;
  fabric: Fabric;
}

const QuickAdd = ({ isQuickAddOpen, toggleModal, fabric }: QuickAddProps) => {
  const dispatch = useDispatch();
  const { selectedQuickAddItem } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <Modal open={isQuickAddOpen}>
      <div className={classes.quickAdd}>
        <button className={classes.closeButton} onClick={toggleModal}>
          X
        </button>
        <div className={classes.details}>
          <img src={fabric.image} alt="fabric" />
          <div>
            <h1>{fabric.name}</h1>
            <h2>{fabric.quantities.cost} per yard</h2>
            <div>
              <Button
                onClick={() =>
                  dispatch(removeSelectedItemAmount({ amount: 0.25 }))
                }
              >
                -
              </Button>
              <input
                step={0.01}
                value={selectedQuickAddItem.quantities.amount}
                min={0}
                readOnly
                type="number"
                className={classes.quantity}
              />
              <Button
                onClick={() => {
                  dispatch(addSelectedItemAmount({ amount: 0.25 }));
                }}
              >
                +
              </Button>
              <Button onClick={() => dispatch(addItem(selectedQuickAddItem))}>
                Add to Cart
              </Button>
            </div>
            <div>
              <p className={classes.description}>low stock or sold out</p>
              <p>{fabric.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuickAdd;
