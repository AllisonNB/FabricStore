import Modal from "./UI/Modal";

const Cart = () => {
  //function to calculate total price
  // const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  return (
    <Modal>
      <h2>Your cart</h2>
      <ul>
        <li>map through items saved in redux store...</li>
        <li>
          <p>Name - Quantity X price</p>
          <p>
            <button>-</button>
            <span># QTY</span>
            <button>+</button>
          </p>
        </li>
      </ul>
      <p>price total</p>
      <p>
        <button>Close</button>
        <button>Go to Checkout</button>
      </p>
    </Modal>
  );
};

export default Cart;
