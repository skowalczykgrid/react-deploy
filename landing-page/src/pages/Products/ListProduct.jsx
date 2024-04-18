import Rating from "@mui/material/Rating";
import AddToCartButton from "../../components/Icons/AddToCartButton";
import WishlistIcon from "../../components/Icons/WishlistIcon";
import GoToProduct from "../../components/Icons/GoToProduct";

function ListProduct({ product, type }) {
  return (
    <article
      className={`flex rounded-lg  p-4 shadow-2xl ${type === "list" ? "w-[976px] gap-8" : "h-[448px] w-[304px] flex-col gap-4"}`}
    >
      <img
        src={product.thumbnail}
        alt={product.name}
        className="h-[200px] w-[288px] rounded-lg object-cover"
      />

      <div
        className={`flex flex-1 flex-col gap-2 ${type === "grid" && "px-2"}`}
      >
        <div
          className={`flex justify-between ${type === "grid" && "flex-col"}`}
        >
          <h5 className="text-[20px] font-bold text-textPrimary">
            {product.name}
          </h5>
          <Rating
            name="read-only"
            value={product.rating.value}
            precision={0.1}
            readOnly
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-base font-light text-textPrimary">
            ${product.price}
          </span>
          <span className="text-grey-3 text-[14px] font-light line-through">
            ${product.wasPrice}
          </span>
        </div>
        <p className="text-grey-3 text-base font-light capitalize">
          {product.description}
        </p>

        <div className="mt-auto flex gap-6">
          <AddToCartButton
            color="#7E33E0"
            hoverBgColor="#E5E0FC"
            product={product}
          />
          <WishlistIcon
            color="#7E33E0"
            hoverBgColor="#E5E0FC"
            product={product}
          />
          <GoToProduct
            product={product}
            color="#7E33E0"
            hoverBgColor="#E5E0FC"
          />
        </div>
      </div>
    </article>
  );
}

export default ListProduct;
