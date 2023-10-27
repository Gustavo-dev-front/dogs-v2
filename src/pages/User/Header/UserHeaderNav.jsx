import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context";
import styles from "./styles.module.css";
import { BiExit, BiImageAdd, BiBarChart, BiCategory, BiMenu } from "react-icons/bi";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(false);

  function handleMobile() {
    setMobile((previous) => !previous);
  }

  return (
    <nav className={styles.nav}>
      <span className={`${styles.mobileToggler} ${styles.navItem}`} onClick={handleMobile}>
        <BiMenu className={`${styles.icons} ${styles.mobileToggler}`} />
      </span>
      <ul className={mobile ? `${styles.active}` : ""}>
        <li>
          <NavLink to={"/conta"} end className={styles.navItem}>
            <BiCategory className={styles.icons} />
            <span className={styles.navItemDescription}>Minhas postagens</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"estatisticas"} className={styles.navItem}>
            <BiBarChart className={styles.icons} />
            <span className={styles.navItemDescription}>Estatísticas</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"postar"} className={styles.navItem}>
            <BiImageAdd className={styles.icons} />
            <span className={styles.navItemDescription}>Postar</span>
          </NavLink>
        </li>
        <li>
          <button onClick={userLogout} className={styles.navItem}>
            <BiExit className={styles.icons} />
            <span className={styles.navItemDescription}>Sair</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserHeaderNav;
