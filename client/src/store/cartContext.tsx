import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  editItemQuantity: () => {},
});

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({ CartContext });

  const handleAddItem = () => {};

  const handleEditItemQuantity = () => {};

  const ctxValue = {
    items: cart.items,
    addItem: handleAddItem,
    handleEditItemQuantity: handleEditItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
