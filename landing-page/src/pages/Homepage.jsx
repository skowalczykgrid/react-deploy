import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";
import UniqueFeatures from "../components/UniqueFeatures";
import TrendingProducts from "../components/TrendingProducts";

function Homepage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <UniqueFeatures />
      <TrendingProducts />
    </div>
  );
}

export default Homepage;
