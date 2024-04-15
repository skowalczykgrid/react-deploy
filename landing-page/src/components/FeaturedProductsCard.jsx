import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function FeaturedProductsCard({ product }) {
  if (!product)
    return <div className=" h-[368px] w-[304px] rounded-lg bg-[#F8F8FD]"></div>;

  return (
    <article className="group z-10 mx-3 my-8 flex h-[368px] w-[304px] flex-col items-center gap-4  rounded-lg shadow-lg transition-all hover:translate-y-[-24px]">
      <div className="relative basis-[63%]">
        <div className="absolute m-2 space-x-2 opacity-0 transition-all group-hover:opacity-100">
          <IconButton
            sx={{
              backgroundColor: "transparent",
              color: "#7E33E0",
              "&:hover": {
                backgroundColor: "#E5E0FC",
              },
            }}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "transparent",
              color: "#7E33E0",
              "&:hover": {
                backgroundColor: "#E5E0FC",
              },
            }}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "transparent",
              color: "#7E33E0",
              "&:hover": {
                backgroundColor: "#E5E0FC",
              },
            }}
          >
            <ZoomInOutlinedIcon />
          </IconButton>
        </div>
        <div className="opacity-0 transition-all group-hover:opacity-100">
          <Button
            sx={{
              position: "absolute",
              backgroundColor: "#0CC562",
              color: "white",
              bottom: "5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "101px",
              height: "36px",
              padding: "11px 16px",
              borderRadius: "6px",
              fontSize: "12px",
              lineHeight: "14px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#7E33E0",
              },
            }}
            variant="contained"
          >
            <Link to={`/products/${product.id}`} state={{ product }}>
              View Details
            </Link>
          </Button>
        </div>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-full rounded-lg object-cover"
        />
      </div>
      <h3 className="px-3 text-center text-base font-bold text-primary">
        {product.category}
      </h3>
      <p className="text-grey-3 text-sm font-light">Code - {product.code}</p>
      <p className="mt-[-8px] text-textPrimary">${product.price}</p>
    </article>
  );
}

export default FeaturedProductsCard;
