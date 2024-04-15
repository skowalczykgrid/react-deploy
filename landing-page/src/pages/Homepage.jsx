import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";
import UniqueFeatures from "../components/UniqueFeatures";

function Homepage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <UniqueFeatures />
    </div>
  );
}

export default Homepage;
