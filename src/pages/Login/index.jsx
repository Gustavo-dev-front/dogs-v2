import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className={styles.login}>
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label={"Usuário"} name={"username"} type={"text"} />
        <Input label={"Senha"} name={"password"} type={"password"} />
        <Button >Entrar</Button>
        <Link style={{margin: "2rem 0"}} className={styles.link } to={"/perdeu-a-senha"}>
          Perdeu a senha?
        </Link>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <Link className={styles.link } to={"/cadastro"}>
          Cadastro
        </Link>
      </form>
    </section>
  );
};

export default Login;
