import React from "react";
import Loading from "../../components/Helper/Loading/Loading";
import Error from "../../components/Helper/Error/Error";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api_endpoints";
import styles from "./styles.module.css";

const Feed = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTOS_GET({page: 1, total: 6, user: 0});
    request(url, options);
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;
  console.log(data);
  return (
    <section className={`${styles.container} ${styles.feed}`}>
      <ul>
        {data.map(({ id, acessos, src, title }) => (
            <li key={id}>
              <img src={src} alt={title} />
              <span>{acessos}</span>
            </li>
        ))}
      </ul>
    </section>
  );
};

export default Feed;
