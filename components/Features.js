import { useEffect, useState } from 'react';
import styles from './features.module.css';

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
      const data = await response.json();
      setFeatures(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.features}>
      {features.map((feature) => (
        <div key={feature.id} className={styles.feature}>
          <img src={feature.imageUrl} alt={feature.title} className={styles.icon} />
          <h3 className={styles.title}>{feature.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Features;
