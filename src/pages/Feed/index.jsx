import React from "react";
import Loading from "../../components/Helper/Loading/Loading";
import Error from "../../components/Helper/Error/Error";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api_endpoints";
import Modal from "../../components/Modal";
import Photo from "../../components/Photo/index";
import styles from "./styles.module.css";

const Feed = () => {
  const { data, loading, error, request } = useFetch();
  const [modalDisplay, setModalDisplay] = React.useState(false);

  React.useEffect(() => {
    const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
    request(url, options);
  }, [request]);

  function handleModal(e) {
    setModalDisplay(true);
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;
  return (
    <>
      <Modal active={modalDisplay} setModalDisplay={setModalDisplay}>
        <Photo />
      </Modal>
      <section className={`${styles.container} ${styles.feed}`}>
        <ul>
          {data.map(({ id, acessos, src, title }) => (
            <li key={id} onClick={handleModal}>
              <img src={src} alt={title} />
              <span>{acessos}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Feed;
