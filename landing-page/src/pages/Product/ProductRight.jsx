import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import ButtonBlackBorder from "../../components/ButtonBlackBorder";

function ProductRight({ product }) {
  const [rating, setRating] = useState(0);
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
        <ButtonBlackBorder>Add To Cart</ButtonBlackBorder>
        <IconButton
          sx={{
            backgroundColor: "transparent",
            color: "#101750",
          }}
        >
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ProductRight;
