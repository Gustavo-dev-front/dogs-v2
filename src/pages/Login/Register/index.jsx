import React from "react";
import Title from "../../../components/Title/Title";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { USER_POST } from "../../../api_endpoints";
import Error from "../../../components/Helper/Error/Error";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { data, error, loading, request } = useFetch();
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const userIsValid = username.validate();
    const emailIsValid = email.validate();
    const passwordIsValid = password.validate();

    if (userIsValid && emailIsValid && passwordIsValid) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="anime-left">
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          name={"username"}
          label={"Usuário"}
          {...username}
        />
        <Input type={"email"} name={"email"} label={"E-mail"} {...email} />
        <Input
          type={"password"}
          name={"password"}
          label={"Senha"}
          {...password}
        />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error ? <Error error={error} /> : null}
      </form>
    </section>
  );
};

export default Register;
