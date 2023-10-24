import React from "react";
import { NavLink } from "react-router-dom";
import {UserContext} from "../context";
import styles from "./styles.module.css";

const UserHeader = () => {
  const {userLogout} = React.useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <NavLink to={"/conta"} end>
        Minhas postagens
      </NavLink>
      <NavLink to={"estatisticas"}>Estatísticas</NavLink>
      <NavLink to={"postar"}>Postar</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
};

export default UserHeader;
