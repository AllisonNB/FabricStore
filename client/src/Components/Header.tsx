import classes from "./Header.module.css";
import Cart from "./Cart";
import Button from "./UI/Button";
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
      <Button onClick={toggleModal} textOnly={false}>
        Cart (0)
      </Button>
    </div>
  );
};

export default Header;
