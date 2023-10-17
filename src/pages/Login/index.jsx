import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Title from "../../components/Title/Title";
import useForm from "../../hooks/useForm";
import { TOKEN_POST } from "../../api_endpoints";

const Login = () => {
  const username = useForm();
  const password = useForm();

  async function fetchAPI() {
    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(response, json);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const userIsValid = username.validate();
    const passwordIsValid = password.validate();

    if (userIsValid && passwordIsValid) fetchAPI();
  }

  return (
    <section className={`anime-left ${styles.login}`}>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Usuário"}
          name={"username"}
          type={"text"}
          {...username}
        />
        <Input
          label={"Senha"}
          name={"password"}
          type={"password"}
          {...password}
        />
        <Button>Entrar</Button>
        <Link
          style={{ margin: "2rem 0" }}
          className={styles.link}
          to={"perdeu-a-senha"}
        >
          Perdeu a senha?
        </Link>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <Link className={styles.link} to={"cadastro"}>
          Cadastro
        </Link>
      </form>
    </section>
  );
};

export default Login;
