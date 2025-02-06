import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { Fabric } from "../types/fabrics";
import classes from "./QuickAdd.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { addItem } from "../store/cartSlice";

interface QuickAddProps {
  isQuickAddOpen: boolean;
  toggleModal: () => void;
  fabric: Fabric;
}

const QuickAdd = ({ isQuickAddOpen, toggleModal, fabric }: QuickAddProps) => {
  //connect component to redux store, use the name of the slice to access
  const currentCartItems = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [itemAmount, setItemAmount] = useState(0.0);

  const currentItem = {
    name: fabric.name,
    quantities: {
      cost: fabric.quantities.cost,
      amount: itemAmount,
      sale: false,
    },
  };

  // console.log(currentCartItems);

  const handleIncreaseQuantity = () => {
    setItemAmount((prevItemAmount) => prevItemAmount + 0.25);
  };

  console.log(itemAmount);

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
              <Button textOnly={false}>-</Button>
              <input
                step={0.01}
                value={itemAmount}
                type="number"
                className={classes.quantity}
              />
              <Button onClick={handleIncreaseQuantity} textOnly={false}>
                +
              </Button>
              <Button
                textOnly={false}
                onClick={() => dispatch(addItem(currentItem))}
              >
                Add to Cart
              </Button>
            </div>
            <div>
              <p className={classes.description}>
                low stock / available / sold out
              </p>
              <p>{fabric.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuickAdd;
