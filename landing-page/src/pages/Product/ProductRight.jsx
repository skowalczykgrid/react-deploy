import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useContext, useState } from "react";
import ButtonBlackBorder from "../../components/ButtonBlackBorder";
import { AppContext } from "../../App";

function ProductRight({ product }) {
  const [rating, setRating] = useState(0);
  const {
    addToCart,
    enqueueSnackbar,
    addToWishlist,
    removeFromWishlist,
    wishlist,
  } = useContext(AppContext);

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    enqueueSnackbar("Product added to cart", { variant: "success" });
  };

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
    <div className="ml-[112px] flex flex-col gap-2 pt-10">
      <h3 className="text-[36px] font-bold text-textPrimary">
        {product.category}
      </h3>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newRating) => {
          setRating(newRating);
        }}
      />
      <div className="my-4 space-x-4">
        <span className=" text-base font-light text-textPrimary">
          ${product.price}
        </span>
        <span className="text-base font-light text-primary line-through">
          ${product.wasPrice}
        </span>
      </div>
      <p className="text-base font-light text-[#A9ACC6]">
        {product.description}
      </p>
      <div className="mt-[56px] space-x-[72px]">
        <ButtonBlackBorder onClick={handleAddToCart}>
          Add To Cart
        </ButtonBlackBorder>
        <IconButton
          sx={{
            backgroundColor: "transparent",
            color: isInWishlist ? "#FB2E86" : "#101750",
          }}
          onClick={handleAddToWishlist}
        >
          {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
      </div>
    </div>
  );
}

export default ProductRight;
