import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppContext } from "../../App";
import { useContext } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function AddToCart({ color, hoverBgColor, product }) {
  const { addToCart } = useContext(AppContext);

  return (
    <IconButton
      sx={{
        backgroundColor: "transparent",
        color,
        "&:hover": {
          backgroundColor: hoverBgColor,
        },
      }}
      onClick={() => addToCart(product)}
    >
      <ShoppingCartOutlinedIcon />
    </IconButton>
  );
}

export default AddToCart;

//ALERT SNACKBAR TODO
