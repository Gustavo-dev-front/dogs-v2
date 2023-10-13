import React from "react";

const types = {
  email: {
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    message: "E-mail inválido, favor corrigir",
  },
  number: {
    regex: /^[0-9]+$/,
    message: "Digite apenas números",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  function validate() {
    if (!value) {
      setError("Preencha o campo acima");
      return false;
    }

    if (type && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }

    setError(false);
    return true;
  }

  function onBlur() {
    validate();
  }

  function onChange({ target }) {
    if (error) validate();
    setValue(target.value);
  }

  return {
    value,
    onChange,
    onBlur,
    validate,
    error,
  };
};

export default useForm;
