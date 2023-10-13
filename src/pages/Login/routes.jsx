import React from "react";
import styles from "./styles.module.css";
import Login from "./";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import LostPassword from "./Lost";
import ResetPassword from "./Reset";

const LoginRoutes = () => {
  return (
    <section className={`container ${styles.container}`}>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"cadastro"} element={<Register />} />
        <Route path={"/perdeu-a-senha"} element={<LostPassword />} />
        <Route path={"/resetar-a-senha"} element={<ResetPassword />} />
      </Routes>
    </section>
  );
};

export default LoginRoutes;
