import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

import classes from "./Modal.module.css";

interface modalProps {
  open: boolean;
  children: React.ReactNode;
}

const Modal = ({ open, children }: modalProps) => {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (!modal) {
      return;
    }

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`${classes.modal}`}>
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
};

export default Modal;
