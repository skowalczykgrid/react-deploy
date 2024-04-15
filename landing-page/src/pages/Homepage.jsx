import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";

function Homepage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
    </div>
  );
}

export default Homepage;
