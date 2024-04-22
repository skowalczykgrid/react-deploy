import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/ProductsPage";
import Product from "./pages/ProductPage";
import Cart from "./pages/CartPage";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  const [filters, setFilters] = useState({});

  const [userFilters, setUserFilters] = useState({
    brand: [],
    category: [],
    price: [0, 6500],
    discountPercentage: [],
    rating: [],
    colors: [],
  });

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
      const isProductInWishlist = prevWishlist.some(
        (item) => item.id === productToAdd.id,
      );

      if (!isProductInWishlist) {
        return [...prevWishlist, productToAdd];
      }

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
      // const response = await fetch(`api/products`);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchFilters() {
      const response = await fetch("http://localhost:5000/filters");
      // const response = await fetch(`api/filters`);
      const data = await response.json();
      setFilters(data);
    }
    fetchFilters();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        filters,
        setCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        enqueueSnackbar,
        addToWishlist,
        removeFromWishlist,
        wishlist,
        userFilters,
        setUserFilters,
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex flex-1 flex-col">
              <Routes>
                {/* <Route path="/" element={<AppLayout />}> */}
                <Route index element={<Homepage />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<PageNotFound />} />
                {/* </Route> */}
              </Routes>
            </main>
            <Footer />
          </div>

          <SnackbarProvider autoHideDuration={3000} />
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
