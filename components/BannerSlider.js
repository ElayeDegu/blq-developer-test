import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './BannerSlider.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

const BannerSlider = () => {
  const { data, error } = useSWR('https://api.testvalley.kr/main-banner/all', fetcher);

  if (error) return <div>Error loading banners!</div>;
  if (!data) return <div>Loading...</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {data.map((banner) => (
        <div key={banner.id}>
          <img src={banner.pcImageUrl} alt={banner.title} className={styles.bannerImage} />
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;

