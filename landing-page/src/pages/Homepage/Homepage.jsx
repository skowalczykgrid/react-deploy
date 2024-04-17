import Hero from "./Hero/Hero";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import LatestProducts from "./LatestProducts/LatestProducts";
import UniqueFeatures from "./UniqueFeatures/UniqueFeatures";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import DiscountItem from "./DiscountItem/DiscountItem";
import TopCategories from "./TopCategories/TopCategories";
import Newsletter from "./Newsletter/Newsletter";
import LatestBlog from "./LatestBlog/LatestBlog";
import ScrollRevealSection from "../../components/ScrollRevealSection";

function Homepage() {
  return (
    <div>
      <Hero />

      <FeaturedProducts />

      <ScrollRevealSection>
        <LatestProducts />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <UniqueFeatures />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <TrendingProducts />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <DiscountItem />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <TopCategories />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <Newsletter />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <LatestBlog />
      </ScrollRevealSection>
    </div>
  );
}

export default Homepage;
