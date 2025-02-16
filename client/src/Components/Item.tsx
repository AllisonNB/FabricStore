import classes from "./Item.module.css";
import { Fabric } from "../types/fabrics";
import { useState } from "react";
import QuickAdd from "./QuickAdd";
import Button from "./UI/Button";
import { useDispatch } from "react-redux";
import { setSelectedQuickAddItem } from "../store/cartSlice";

type fabricProps = {
  fabric: Fabric;
};

const Item = ({ fabric }: fabricProps) => {
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = () => {
    setIsQuickAddOpen(!isQuickAddOpen);
    dispatch(
      setSelectedQuickAddItem({
        productId: fabric.productId,
        name: fabric.name,
        image: fabric.image,
        quantities: {
          cost: fabric.quantities.cost,
          amount: 0,
          sale: false,
        },
      })
    );
  };

  return (
    <>
      <div className={classes.border}>
        <img src={fabric.image} alt="fabric sample" />
        <h1>{fabric.name}</h1>
        <p>${fabric.quantities.cost} / yard</p>
        <div className={classes.buttonContainer}>
          <Button onClick={toggleModal}>Quick Add</Button>
        </div>
        <QuickAdd
          isQuickAddOpen={isQuickAddOpen}
          toggleModal={toggleModal}
          fabric={fabric}
        />
      </div>
    </>
  );
};

export default Item;
