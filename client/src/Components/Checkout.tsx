import Modal from "./UI/Modal";
import Input from "./UI/Input";

//update inventory when checking out

const Checkout = () => {
  return (
    <Modal>
      <form action="">
        <h2>Checkout</h2>
        <p>total amount</p>
        <Input />
        <Input />
        <Input />
      </form>
    </Modal>
  );
};

export default Checkout;
