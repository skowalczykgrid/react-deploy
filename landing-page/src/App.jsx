import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
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
    <div className="flex h-screen items-center justify-center gap-10">
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={() => setOpen(true)}
      >
        This is a MUI button
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        message="This is a MUI toast"
        autoHideDuration={5000}
      />

      <ul className="space-y-5">
        {products.slice(0, 5).map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
