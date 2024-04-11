import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function Products() {
  const { products } = useContext(AppContext);

  return (
    <ul>
      {products.slice(0, 10).map((product) => (
        <li key={product.id}>
          <Link to={`${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Products;
