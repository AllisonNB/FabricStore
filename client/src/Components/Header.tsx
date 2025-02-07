import classes from "./Header.module.css";
import Cart from "./Cart";
import Button from "./UI/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const Header = () => {
  //connect component to redux store, use the name of the slice to access
  const currentCartItems = useSelector((state: RootState) => state.cart.items);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  console.log(currentCartItems);

  return (
    <div className={classes.header}>
      <Cart isCartOpen={isCartOpen} toggleModal={toggleModal} />
      <h1 className={classes.title}>Trendy Threads</h1>
      <Button onClick={toggleModal} textOnly={false}>
        Cart ({currentCartItems.length})
      </Button>
    </div>
  );
};

export default Header;
