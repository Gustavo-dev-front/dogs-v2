import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function request(url, options) {
    setLoading(true);
    setError(false);

    let response, json;

    try {
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error("Usuário ou senha incorretos.");
    } catch (error) {
      setError(error.message);
      json = null;
    } finally {
      setData(json);
      setLoading(false);
    }

    return { response, json };
  }

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
