import Hero from "./Hero/Hero";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import LatestProducts from "./LatestProducts/LatestProducts";
import UniqueFeatures from "./UniqueFeatures/UniqueFeatures";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import DiscountItem from "./DiscountItem/DiscountItem";
import TopCategories from "./TopCategories/TopCategories";
import Newsletter from "./Newsletter/Newsletter";

function Homepage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <UniqueFeatures />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <Newsletter />
    </div>
  );
}

export default Homepage;
