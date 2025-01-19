import Modal from "./UI/Modal";
import { Fabric } from "../types/fabrics";
import classes from "./QuickAdd.module.css";

interface QuickAddProps {
  isQuickAddOpen: boolean;
  toggleModal: () => void;
  fabric: Fabric;
}

const QuickAdd = ({ isQuickAddOpen, toggleModal, fabric }: QuickAddProps) => {
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
              <button>-</button>
              <input type="number" value="1" className={classes.quantity} />
              <button>+</button>
              <button className={classes.addToCartButton}>Add to Cart</button>
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
