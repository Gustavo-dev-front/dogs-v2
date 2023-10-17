import React from "react";
import Title from "../../../components/Title/Title";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import useForm from "../../../hooks/useForm";

const Register = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    const userIsValid = username.validate();
    const emailIsValid = email.validate();
    const passwordIsValid = password.validate();

    if (userIsValid && emailIsValid && passwordIsValid) console.log("fetch");
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
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default Register;
