import React from "react";
import useFetch from "../../../hooks/useFetch";
import { STATS_GET } from "../../../api_endpoints";
import Loading from "../../../components/Helper/Loading/Loading";
import Error from "../../../components/Helper/Error/Error";
import styles from "./styles.module.css";
import { VictoryChart, VictoryBar, VictoryPie } from "victory";

const Statistics = () => {
  const { data, loading, error, request } = useFetch();
  const processed_data = data?.map((item) => {
    return { x: item.title, y: +item.acessos };
  });
  const acessos = processed_data?.reduce((previous, { y }) => {
    return previous + Number(y);
  }, 0);

  console.log(processed_data);

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
        <span>Acessos:{acessos}</span>
      </div>
      <div className={styles.container}>
        <VictoryChart>
          <VictoryBar
            data={processed_data}
            alignment="middle"
            labels={({ datum }) => datum.y}
          />
        </VictoryChart>
      </div>
      <div className={styles.container}>
      <VictoryChart>
          <VictoryPie
            data={processed_data}
            labels={({ datum }) => datum.y}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
              labels: { fontSize: 14, fill: "#333" },
            }}
          />
          
        </VictoryChart>
      </div>
    </section>
  );
};

export default Statistics;
