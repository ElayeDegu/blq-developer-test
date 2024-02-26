import Navbar from '@/components/Navbar';
import Slider from '../components/BannerSlider';
import Features from '../components/Features';
import PrearrangedDiscount from '../components/PrearrangedDiscount';
import FilteredFeatures from '@/components/FilteredFeatures';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Features />
      <FilteredFeatures />
      <PrearrangedDiscount />
    </div>
  );
};

export default Home;
