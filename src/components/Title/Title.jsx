import React from "react";
import styles from "./styles.module.css";

const Title = ({ children, modal }) => {
  return (
    <h1
      className={`${styles.title} anime-left`}
      style={modal ? { zIndex: 1 } : {}}
    >
      {children}
    </h1>
  );
};

export default Title;
