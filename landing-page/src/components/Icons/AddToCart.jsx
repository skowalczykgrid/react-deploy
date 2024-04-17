import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppContext } from "../../App";
import { useContext } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function AddToCart({ color, hoverBgColor, product }) {
  const { addToCart, handleSnackbarOpen } = useContext(AppContext);

  const handleAddToCart = () => {
    addToCart(product);
    handleSnackbarOpen("Item added to cart");
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

export default AddToCart;

//ALERT SNACKBAR TODO
