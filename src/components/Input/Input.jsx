import React from "react";
import styles from "./styles.module.css";

const Input = ({ label, name, type }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} />
    </div>
  );
};

export default Input;
