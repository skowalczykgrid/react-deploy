import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AppContext } from "../App";
import ProductMain from "../components/ProductMain";
import ProductInfo from "../components/ProductInfo";
import ProductRelated from "../components/ProductRelated";

function Product() {
  const { products } = useContext(AppContext);

  const { state } = useLocation();
  const product = state.product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ProductMain product={product} />
      <ProductInfo product={product} />
      <ProductRelated products={products} category={product.category} />
    </main>
  );
}

export default Product;
