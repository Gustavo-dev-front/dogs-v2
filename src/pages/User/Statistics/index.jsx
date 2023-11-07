import React from "react";
import useFetch from "../../../hooks/useFetch";
import { STATS_GET } from "../../../api_endpoints";
import Loading from "../../../components/Helper/Loading/Loading";
import Error from "../../../components/Helper/Error/Error";
import styles from "./styles.module.css";

const Statistics = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = STATS_GET();
    request(url, options);
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;
  return (
    <section className={styles.statistics}>
      <div className={styles.container}>
        <span>
          Acessos:{" "}
          {data.reduce((previous, current) => previous + Number(current.acessos), 0)}
        </span>
      </div>
      <div className={styles.container}>Gráfico 1</div>
      <div className={styles.container}>Gráfico 2</div>
    </section>
  );
};

export default Statistics;
