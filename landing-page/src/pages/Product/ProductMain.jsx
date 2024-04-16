import ProductImages from "./ProductImages";
import ProductRight from "./ProductRight";

function ProductMain({ product }) {
  return (
    <section className="flex gap-8 px-[304px] py-[100px]">
      <ProductImages product={product} />
      <ProductRight product={product} />
    </section>
  );
}

export default ProductMain;
