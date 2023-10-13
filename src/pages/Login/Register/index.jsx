import React from "react";
import Title from "../../../components/Title/Title";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const Register = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="anime-left">
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit}>
        <Input type={"text"} name={"username"} label={"Usuário"} />
        <Input type={"email"} name={"email"} label={"E-mail"} />
        <Input type={"password"} name={"password"} label={"Senha"} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default Register;
