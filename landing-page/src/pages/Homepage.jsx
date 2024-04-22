import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import LatestProducts from "../components/LatestProducts/LatestProducts";
import UniqueFeatures from "../components/UniqueFeatures/UniqueFeatures";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import DiscountItem from "../components/DiscountItem/DiscountItem";
import TopCategories from "../components/TopCategories/TopCategories";
import Newsletter from "../components/Newsletter/Newsletter";
import LatestBlog from "../components/LatestBlog/LatestBlog";
import ScrollRevealSection from "../components/ScrollRevealSection";

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
