import React from "react";
import styles from "./styles.module.css";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";

const Home = () => {
  return (
    <section className={`container ${styles.home}`}>
      <div className={styles.imageBox}></div>

      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </section>
  );
};

export default Home;
