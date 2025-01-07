//inject modal in a nex div in index.html with id "modal"

import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

const Modal = ({ children, open, className = "" }) => {
  //use ref will give access to built in showModal funtion
  const dialog = useRef();

  //allows you to open dialog programmatically, which perserves built in features (ie: backdrop)
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      dialog.current.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
