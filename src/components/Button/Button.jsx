import React from "react";
import styles from "./styles.module.css";

const Button = ({children, style}) => {
  return <button style={style} className={styles.button}>{children}</button>;
};

export default Button;
