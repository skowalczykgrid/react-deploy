import { useParams } from "react-router-dom";

function Product() {
  const x = useParams();

  console.log(x);

  return <div>Product</div>;
}

export default Product;
