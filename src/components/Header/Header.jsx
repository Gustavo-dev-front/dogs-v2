import React from "react";
import logo from "../../assets/dogs.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <Link to={"/login"}>Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
