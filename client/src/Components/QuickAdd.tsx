import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { Fabric } from "../types/fabrics";
import classes from "./QuickAdd.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

interface QuickAddProps {
  isQuickAddOpen: boolean;
  toggleModal: () => void;
  fabric: Fabric;
}

const QuickAdd = ({ isQuickAddOpen, toggleModal, fabric }: QuickAddProps) => {
  const dispatch = useDispatch();

  const [itemAmount, setItemAmount] = useState(0.25);

  const currentItem = {
    name: fabric.name,
    quantities: {
      cost: fabric.quantities.cost,
      amount: itemAmount,
      sale: false,
    },
  };

  const handleIncreaseQuantity = () => {
    setItemAmount((prevItemAmount) => prevItemAmount + 0.25);
  };

  const handleDecreaseQuantity = () => {
    setItemAmount((prevItemAmount) => prevItemAmount - 0.25);
  };

  const handleItemAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemAmount(parseFloat(e.target.value));
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
              <Button onClick={handleDecreaseQuantity} textOnly={false}>
                -
              </Button>
              <input
                step={0.01}
                value={itemAmount}
                onChange={handleItemAmountChange}
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
