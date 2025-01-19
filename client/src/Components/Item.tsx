import classes from "./Item.module.css";
import { Fabric } from "../types/fabrics";
import { useState } from "react";
import QuickAdd from "./QuickAdd";

type fabricProps = Fabric;

const Item = (fabric: fabricProps) => {
  // console.log("item", fabric);

  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);

  const toggleModal = () => {
    setIsQuickAddOpen(!isQuickAddOpen);
  };

  return (
    <>
      <div className={classes.border}>
        <img src={fabric.image} alt="fabric sample" />
        <h1>{fabric.name}</h1>
        <p>${fabric.quantities.cost} / yard</p>
        <div className={classes.buttonContainer}>
          <button className={classes.button} onClick={toggleModal}>
            Quick Add
          </button>
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
