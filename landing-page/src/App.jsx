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

import { SnackbarProvider, enqueueSnackbar } from "notistack";

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

  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (productToAdd) => {
    setWishlist((prevWishlist) => {
      // Check if the product is already in the wishlist
      const isProductInWishlist = prevWishlist.some(
        (item) => item.id === productToAdd.id,
      );

      if (!isProductInWishlist) {
        // Product is not in wishlist, add it
        return [...prevWishlist, productToAdd];
      }
      // If product is already in the wishlist, return the existing list without adding
      return prevWishlist;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId),
    );
  };

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
        enqueueSnackbar,
        addToWishlist,
        removeFromWishlist,
        wishlist,
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

          <SnackbarProvider
            autoHideDuration={3000}

            // anchorOrigin={{ horizontal: "center", vertical: "top" }}
          />
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
