import React from "react";
import Error from "../Helper/Error/Error";
import styles from "./styles.module.css";

const Input = ({ label, name, type, error, onChange, onBlur, value }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <Error error={error} /> : null}
    </div>
  );
};

export default Input;
