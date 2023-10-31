import React from "react";
import Error from "../Helper/Error/Error";
import useFetch from "../../hooks/useFetch";
import Loading from "../Helper/Loading/Loading";
import Title from "../../components/Title/Title";
import { PHOTO_GET } from "../../api_endpoints";
import styles from "./styles.module.css";

const Photo = ({ photoId }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getPhoto() {
      const { url, options } = PHOTO_GET(photoId);
      const { response, json } = await request(url, options);
      console.log(json);
    }
    if (photoId) getPhoto();
  }, [photoId, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <article className={styles.photo}>
      <div className={styles.image}>
        <img src={data.photo.src} alt={data.photo.title} />
      </div>
      <div className={styles.content}>
        <span className={styles.author}>@{data.photo.author}</span>
        <span className={styles.access}>{data.photo.acessos}</span>
        <div className={styles.details}>
          <Title modal={true}>{data.photo.title}</Title>
          <span>{data.photo.peso} kg</span>
          <span>{data.photo.idade} anos</span>
        </div>
        <div className={styles.comments}>
          <div className={styles.messages}></div>
          <textarea placeholder="Comente..."></textarea>
        </div>
      </div>
    </article>
  );
};

export default Photo;
