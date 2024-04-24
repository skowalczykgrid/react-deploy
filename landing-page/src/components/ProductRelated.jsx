import ProductRelatedSlider from "./ProductRelatedSlider";

function ProductRelated({ category }) {
  return (
    <section className="mx-auto flex max-w-[1920px] flex-col gap-10 px-[304px] py-[100px]">
      <h3 className="text-[36px] font-bold text-textPrimary">
        Related Products
      </h3>
      <div className="flex justify-center gap-8">
        <ProductRelatedSlider category={category} />
      </div>
    </section>
  );
}

export default ProductRelated;
