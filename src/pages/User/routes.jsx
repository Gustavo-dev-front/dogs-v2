import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Title from "../../components/Title/Title";
import Statistics from "./Statistics/index";
import Post from "./Post/index";
import Feed from "../Feed/index";
import UserHeader from "./Header/UserHeader";
import styles from "./styles.module.css";

const UserRoutes = () => {
  const [title, setTitle] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    if (pathname.includes("estatisticas")) setTitle("Estatísticas");
    else if (pathname.includes("postar")) setTitle("Poste sua foto");
    else setTitle("Minhas postagens");
  }, [location]);

  return (
    <section className={`container`}>
      <header className={styles.header}>
        <Title>{title}</Title>
        <UserHeader />
      </header>
      <Routes>
        <Route path={"/"} element={<Feed />} />
        <Route path={"estatisticas"} element={<Statistics />} />
        <Route path={"postar"} element={<Post />} />
      </Routes>
    </section>
  );
};

export default UserRoutes;
