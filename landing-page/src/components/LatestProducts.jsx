import LatestProductsTabs from "./LatestProductsTabs";

function LatestProducts() {
  return (
    <section className=" flex flex-col items-center py-[100px]">
      <h2 className="text-[44px] font-bold text-textPrimary ">
        Latest Products
      </h2>
      <LatestProductsTabs />
    </section>
  );
}

export default LatestProducts;
