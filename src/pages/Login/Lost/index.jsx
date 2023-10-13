import React from "react";
import Title from "../../../components/Title/Title";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const LostPassword = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="anime-left">
      <Title>Perdeu a senha?</Title>
      <form onSubmit={handleSubmit}>
        <Input label={"E-mail / Usuário"} name={"username"} type={"text"} />
        <Button>Enviar e-mail</Button>
      </form>
    </section>
  );
};
export default LostPassword;
