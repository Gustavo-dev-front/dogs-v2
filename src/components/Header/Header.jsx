import React, { useContext } from "react";
import logo from "../../assets/dogs.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../pages/User/context";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Link to={"/"}><img src={logo} alt="logo"/></Link>
        {user ? <Link to={"/conta"}>{user.username}</Link> : <Link to={"/login"}>Login / Criar</Link>}
      </nav>
    </header>
  );
};

export default Header;
