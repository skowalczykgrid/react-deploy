import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound";
import { Snackbar, Alert } from "@mui/material";

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
  const [cart, setCart] = useState([]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [snackbars, setSnackbars] = useState([]);

  const handleSnackbarOpen = (message) => {
    const newSnackbar = {
      key: new Date().getTime(),
      message: message,
    };
    setSnackbars((prevSnackbars) => [...prevSnackbars, newSnackbar]);
  };

  const handleSnackbarClose = (key) => {
    setSnackbars((prevSnackbars) =>
      prevSnackbars.filter((snackbar) => snackbar.key !== key),
    );
  };

  function addToCart(productToAdd) {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === productToAdd.id,
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  }

  function updateQuantity(productId, newQuantity) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        handleSnackbarOpen,
      }}
    >
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
          {snackbars.map((snackbar) => (
            <Snackbar
              key={snackbar.key}
              open={true}
              autoHideDuration={6000}
              onClose={() => handleSnackbarClose(snackbar.key)}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert severity="success" sx={{ width: "100%" }}>
                {snackbar.message}
              </Alert>
            </Snackbar>
          ))}
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
