import classes from "./Header.module.css";
import Cart from "./Cart";
import { useState } from "react";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={classes.header}>
      <Cart isCartOpen={isCartOpen} toggleModal={toggleModal} />
      <h1 className={classes.title}>Trendy Threads</h1>
      <button className={classes.button} onClick={toggleModal}>
        Cart (0)
      </button>
    </div>
  );
};

export default Header;
