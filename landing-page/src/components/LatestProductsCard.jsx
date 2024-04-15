import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import IconButton from "@mui/material/IconButton";

function LatestProductsCard({ product }) {
  if (!product)
    return (
      <article className="flex h-[304px] w-[416px] flex-col gap-[10px]">
        <div className="bg-grey-1 h-[272px] w-full rounded-lg"></div>
        <div className="flex justify-between">
          <div className="bg-grey-1 h-[24px] w-[233px] rounded-lg"></div>
          <div className="bg-grey-1 h-[24px] w-[99px] rounded-lg"></div>
        </div>
      </article>
    );

  const truncatedName =
    product.name.length > 30 ? `${product.name.slice(0, 30)}...` : product.name;

  return (
    <article className="group flex h-[304px] w-[416px] flex-col gap-3">
      <div className="relative h-[272px] w-full">
        <div className="absolute bottom-0 m-2 flex flex-col space-y-2 opacity-0 transition-all group-hover:opacity-100">
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
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-full w-full rounded-md object-cover"
        />
      </div>

      <div className="grid grid-cols-[1fr_max-content_max-content] grid-rows-1 items-center gap-4">
        <span className="text-base font-light text-textPrimary">
          {truncatedName}
        </span>

        <span className="self-end text-base font-light text-textPrimary">
          ${product.price}
        </span>

        <span className="self-end text-[14px] font-light text-primary">
          ${product.wasPrice}
        </span>
      </div>
    </article>
  );
}

export default LatestProductsCard;
