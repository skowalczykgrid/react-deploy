import FeaturedSlider from "./FeaturedProductsSlider";

function FeaturedProducts() {
  return (
    <section className="flex h-[756px] flex-col items-center gap-[72px] pt-[100px]">
      <h2 className="text-[44px] font-bold leading-[52px] text-textPrimary">
        Featured Products
      </h2>
      <FeaturedSlider />
    </section>
  );
}

export default FeaturedProducts;
