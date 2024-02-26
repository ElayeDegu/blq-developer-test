import { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./filteredFeatures.module.css";
import { Col, Row } from "antd";

const fetcher = (url) => fetch(url).then((res) => res.json());

const FilteredFeatures = () => {
  const { data, error } = useSWR(
    "https://api.testvalley.kr/collections?prearrangedDiscount",
    fetcher
  );

  if (error) return <div>Error loading collections!</div>;
  if (!data) return <div>Loading...</div>;

  const filteredItems = data.items.filter(
    (item) => item.type === "SINGLE" && item.viewType === "TILE"
  );
  console.log("filteredItems", filteredItems);
  return (
    <>
      <Row>
        <ul className={styles.featuresList}>
          {filteredItems.map((item) => (
            <>
              <Col span={6}>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <h6 className={styles.featureSubtitle}>{item.subtitle}</h6>
              </Col>
              <Col span={6}>
                <div className={styles.features}>
                  <li key={item.id} className={styles.featureItem}>
                    <div className={styles.features}>
                      {item.publication && item.publication.media?.[0]?.uri ? (
                        <img
                          src={item.publication.media[0].uri}
                          alt={item.title}
                        />
                      ) : (
                        <div>No thumbnail image available</div>
                      )}
                    </div>
                  </li>
                </div>
              </Col>
            </>
          ))}
        </ul>
      </Row>
    </>
  );
};

export default FilteredFeatures;
