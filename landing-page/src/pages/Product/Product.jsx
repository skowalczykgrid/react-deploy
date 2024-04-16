import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { AppContext } from "../../App";
import ProductMain from "./ProductMain";
import ProductInfo from "./ProductInfo";
import ProductRelated from "./ProductRelated";

function Product() {
  const { products } = useContext(AppContext);

  const { state } = useLocation();
  const product = state.product;

  return (
    <main>
      <ProductMain product={product} />
      <ProductInfo product={product} />
      <ProductRelated products={products} category={product.category} />
    </main>
  );
}

export default Product;
