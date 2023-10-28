import React from "react";
import styles from "./styles.module.css";

const Photo = ({data}) => {
  return <article className={styles.photo}>
    <div className={styles.image}>TESTA</div>
    <div className="content"></div>
  </article>;
};

export default Photo;
