import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Title from "../../components/Title/Title";
import useForm from "../../hooks/useForm";
import { TOKEN_POST } from "../../api_endpoints";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Helper/Error/Error";

const Login = () => {
  const { data, error, loading, request } = useFetch();
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    const userIsValid = username.validate();
    const passwordIsValid = password.validate();

    if (userIsValid && passwordIsValid) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      request(url, options);
    }
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
        {loading ? (
          <Button disabled>Entrando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error ? <Error error={error} /> : null}
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
