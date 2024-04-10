import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

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
