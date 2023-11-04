import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Title from "../../components/Title/Title";
import Statistics from "./Statistics/index";
import Post from "./Post/index";
import Feed from "../Feed/index";
import UserHeaderNav from "./Header/UserHeaderNav";
import styles from "./styles.module.css";
import { UserContext } from "./context";

const UserRoutes = () => {
  const [title, setTitle] = React.useState(null);
  const { userData } = React.useContext(UserContext);

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
        <UserHeaderNav />
      </header>
      <Routes>
        <Route path={"/"} element={<Feed userId={userData.id} />} />
        <Route path={"/estatisticas"} exact element={<Statistics />} />
        <Route path={"/postar"} exact element={<Post />} />
      </Routes>
    </section>
  );
};

export default UserRoutes;
