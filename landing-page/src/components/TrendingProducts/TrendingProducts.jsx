import { useContext } from "react";
import { AppContext } from "../../App";
import TrendingProductsCard from "./TrendingProductsCard";

function TrendingProducts() {
  const { products } = useContext(AppContext);

  const randomNumbers = Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * products.length),
  );

  return (
    <section className="flex flex-col items-center gap-[72px] py-[100px]">
      <h2 className="text-[44px] font-bold text-textPrimary">
        Trending Products
      </h2>
      <div className="flex gap-8">
        {randomNumbers.map((number, index) => {
          return (
            <TrendingProductsCard key={index} product={products[number]} />
          );
        })}
      </div>
    </section>
  );
}

export default TrendingProducts;
