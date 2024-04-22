import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppContext } from "../App";
import { useContext } from "react";

function AddToCartButton({ color, hoverBgColor, product }) {
  const { addToCart, enqueueSnackbar } = useContext(AppContext);

  const handleAddToCart = () => {
    addToCart(product);
    enqueueSnackbar("Product added to cart", { variant: "success" });
  };

  return (
    <IconButton
      sx={{
        backgroundColor: "transparent",
        color,
        "&:hover": {
          backgroundColor: hoverBgColor,
        },
      }}
      onClick={handleAddToCart}
    >
      <ShoppingCartOutlinedIcon />
    </IconButton>
  );
}

export default AddToCartButton;

//ALERT SNACKBAR TODO
