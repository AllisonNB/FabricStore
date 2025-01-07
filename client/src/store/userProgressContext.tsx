//make a redux slice to track if cart modal should be open or not?
import { useState } from "react";

const userProgress = {
  progress: "", //cart, checkout, quick add
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
};

const exampleFunction = () => {
  const [userProgress, setUserProgress] = useState(userProgress);

  const showCart = () => {
    setUserProgress("cart");
  };

  const hideCart = () => {
    setUserProgress("");
  };
};
