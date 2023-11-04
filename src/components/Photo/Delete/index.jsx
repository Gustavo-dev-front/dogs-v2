import React from "react";
import { PHOTO_DELETE } from "../../../api_endpoints";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Delete = ({ id }) => {
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const { url, options } = PHOTO_DELETE(id);
    const message = "Tem certeza que deseja excluir a postagem?";
    const confirm = window.confirm(message);
    if (confirm) {
      const { response } = await request(url, options);
      if (response) window.location.reload();
    }
  }

  return (
    <button className={styles.delete} onClick={handleClick}>
      Deletar
    </button>
  );
};

export default Delete;
