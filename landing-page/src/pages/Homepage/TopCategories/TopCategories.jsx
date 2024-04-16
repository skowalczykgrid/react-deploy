import CategorySlider from "./CategorySlider";

function TopCategories() {
  return (
    <section className="flex flex-col items-center gap-5 py-[100px]">
      <h2 className="text-[44px] font-bold text-textPrimary">Top Categories</h2>
      <CategorySlider />
    </section>
  );
}

export default TopCategories;
