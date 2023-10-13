import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Title from "../../components/Title/Title";

const Login = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("teste");
  }

  return (
    <section className={styles.login}>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <Input label={"Usuário"} name={"username"} type={"text"} />
        <Input label={"Senha"} name={"password"} type={"password"} />
        <Button>Entrar</Button>
        <Link style={{margin: "2rem 0"}} className={styles.link } to={"perdeu-a-senha"}>
          Perdeu a senha?
        </Link>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <Link className={styles.link } to={"cadastro"}>
          Cadastro
        </Link>
      </form>
    </section>
  );
};

export default Login;
