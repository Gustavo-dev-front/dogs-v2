import React from "react";
import Error from "../Helper/Error/Error";
import useFetch from "../../hooks/useFetch";
import Loading from "../Helper/Loading/Loading";
import Title from "../../components/Title/Title";
import { PHOTO_GET } from "../../api_endpoints";
import Image from "../Image/index";
import Comments from "./Comments/index";
import styles from "./styles.module.css";


const Photo = ({ photoId }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getPhoto() {
      const { url, options } = PHOTO_GET(photoId);
      await request(url, options);
    }
    if (photoId) getPhoto();
  }, [photoId, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <article className={styles.photo}>
      <div className={styles.image}>
        <Image src={data.photo.src} alt={data.photo.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.author}>@{data.photo.author}</span>
          <span className={styles.access}>{data.photo.acessos}</span>
        </div>
        <div className={styles.details}>
          <Title modal={true}>{data.photo.title}</Title>
          <span>{data.photo.peso} kg</span>
          <span>{data.photo.idade} anos</span>
        </div>
        <Comments comments={data.comments} id={data.photo.id}/>
      </div>
    </article>
  );
};

export default Photo;
