import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { createContext, lazy, Suspense, useEffect, useState } from "react";

import { SnackbarProvider, enqueueSnackbar } from "notistack";
import LoadingPage from "./pages/LoadingPage";

const theme = createTheme({
  typography: {
    fontFamily: "Josefin Sans",
  },
});

export const initialFilterState = {
  brand: [],
  category: [],
  price: [0, 6500],
  discountPercentage: [],
  rating: [],
  colors: [],
};

export const AppContext = createContext();

const Homepage = lazy(() => import("./pages/Homepage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({});

  const [userFilters, setUserFilters] = useState(initialFilterState);

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
      // const response = await fetch("http://localhost:5000/products");
      const response = await fetch(`api/products`);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchFilters() {
      // const response = await fetch("http://localhost:5000/filters");
      const response = await fetch(`api/filters`);
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
              <Suspense fallback={<LoadingPage />}>
                <Routes>
                  <Route index element={<Homepage />} />
                  <Route path="products" element={<ProductsPage />} />
                  <Route path="products/:id" element={<ProductPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Suspense>
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
