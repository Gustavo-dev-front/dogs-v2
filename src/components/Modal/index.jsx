import React from "react";
import styles from "./styles.module.css";

const Modal = ({ children, active, setModalDisplay }) => {
  function checkOutsideClick(e) {
    if (e.currentTarget === e.target) setModalDisplay(false);
  }

  return (
    <div
      className={`${active && styles.active} ${styles.modal}`}
      onClick={checkOutsideClick}
    >
      {children}
    </div>
  );
};

export default Modal;
