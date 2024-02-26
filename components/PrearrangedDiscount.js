import { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./prearrangedDiscount.module.css";
import { Col, Row } from "antd";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PrearrangedDiscount = () => {
  const { data, error } = useSWR(
    "https://api.testvalley.kr/collections?prearrangedDiscount",
    fetcher
  );
  console.log("Prearranged Discount data", data);

  if (error) return <div>Error loading collections!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Row>
        <Col span={18} push={6}>
          <ul className={styles.collectionsList}>
            {data.items.map((item) => (
              <li key={item.id} className={styles.collectionItem}>
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.thumbnail && (
                    <>
                      <img
                        src={item.thumbnail?.uri}
                        alt={item.title}
                        className={styles.collectionImage}
                      />
                      <span className={styles.collectionTitle}>
                        {item.title}
                      </span>
                    </>
                  )}
                </a>
                <br />
                <h3 className={styles.collectionDescription}>
                  {item.description}
                </h3>
              </li>
            ))}
          </ul>
        </Col>
        <Col span={6} pull={18}>
          Prearranged Discount
        </Col>
      </Row>
    </>
  );
};

export default PrearrangedDiscount;
