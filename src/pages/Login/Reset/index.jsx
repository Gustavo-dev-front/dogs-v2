import React from "react";
import Title from "../../../components/Title/Title";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const ResetPassword = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section>
      <Title>Resetar a senha</Title>
      <form onSubmit={handleSubmit}>
        <Input label={"Nova senha"} name={"password"} type={"password"}/>
        <Button>Resetar</Button>
      </form>
    </section>
  );
};

export default ResetPassword;
