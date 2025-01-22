import classes from "./Item.module.css";
import { Fabric } from "../types/fabrics";
import { useState } from "react";
import QuickAdd from "./QuickAdd";
import Button from "./UI/Button";

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
          <Button onClick={toggleModal} textOnly={false}>
            Quick Add
          </Button>
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
