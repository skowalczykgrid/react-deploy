import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { AppContext } from "../../App";

function WishlistIcon({ color, hoverBgColor, product }) {
  const { addToWishlist, enqueueSnackbar, wishlist, removeFromWishlist } =
    useContext(AppContext);

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product);
      enqueueSnackbar("Product added to Wishlist", {
        variant: "success",
        style: { backgroundColor: "#FB2E86" },
      });
    } else {
      removeFromWishlist(product.id);
      enqueueSnackbar("Product removed from wishlist", {
        variant: "success",
        style: { backgroundColor: "#FB2E70" },
      });
    }
  };

  return (
    <IconButton
      sx={{
        backgroundColor: "transparent",
        color: isInWishlist ? "#FB2E86" : color,

        "&:hover": {
          backgroundColor: hoverBgColor,
        },
      }}
      onClick={handleAddToWishlist}
    >
      {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
    </IconButton>
  );
}

export default WishlistIcon;
