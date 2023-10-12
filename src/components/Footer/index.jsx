import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        &copy; Dogs, todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
