import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { createContext, useEffect, useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Josefin Sans",
  },
});

export const AppContext = createContext();

function App() {
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
    <AppContext.Provider value={{ products }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Homepage />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
