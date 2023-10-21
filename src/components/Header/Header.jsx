import React, { useContext } from "react";
import logo from "../../assets/dogs.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../pages/User/context";

const Header = () => {
  const { data } = useContext(UserContext);
  const name = data?.user_nicename || data?.username;

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        {data ? (
          <Link to={"/conta"}>{name}</Link>
        ) : (
          <Link to={"/login"}>Login / Criar</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
