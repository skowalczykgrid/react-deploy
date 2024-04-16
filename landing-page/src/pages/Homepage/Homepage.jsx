import Hero from "./Hero/Hero";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import LatestProducts from "./LatestProducts/LatestProducts";
import UniqueFeatures from "./UniqueFeatures/UniqueFeatures";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import DiscountItem from "./DiscountItem/DiscountItem";
import TopCategories from "./TopCategories/TopCategories";
import Newsletter from "./Newsletter/Newsletter";
import LatestBlog from "./LatestBlog/LatestBlog";

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
      <LatestBlog />
    </div>
  );
}

export default Homepage;
