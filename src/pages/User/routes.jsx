import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Title from "../../components/Title/Title";
import Statistics from "./Statistics/index";
import Post from "./Post/index";
import Feed from "../Feed/index";

const UserRoutes = () => {
  const [title, setTitle] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    if (pathname.includes("estatisticas")) setTitle("Estatísticas");
    else if (pathname.includes("postar")) setTitle("Poste sua foto");
    else setTitle("Minha conta");
  }, [location]);

  return (
    <section className={`container`}>
      <nav>
        <NavLink to={"/"} end >MINHA CONTA</NavLink>
        <NavLink to={"estatisticas"}>ESTATÍSTICAS</NavLink>
        <NavLink to={"postar"}>POSTAR</NavLink>
      </nav>
      <Title>{title}</Title>
      <Routes>
        <Route path={"/"} element={<Feed />} />
        <Route path={"estatisticas"} element={<Statistics />} />
        <Route path={"postar"} element={<Post />} />
      </Routes>
    </section>
  );
};

export default UserRoutes;
