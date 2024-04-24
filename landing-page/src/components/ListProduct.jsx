import Rating from "@mui/material/Rating";
import AddToCartButton from "./AddToCartButton";
import WishlistIcon from "./WishlistIcon";
import GoToProduct from "./GoToProduct";
import { Link } from "react-router-dom";

function ListProduct({ product, type }) {
  const maxDescriptionLength = type === "list" ? 130 : 60;

  const shorten = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <article
      className={`flex rounded-lg  p-4 shadow-2xl ${type === "list" ? "w-[976px] gap-8" : "h-[448px] w-[304px] flex-col gap-4"}`}
    >
      <Link to={`/products/${product.id}`} state={{ product }}>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-[200px] w-[288px] rounded-lg object-cover transition-all hover:-translate-y-[1px]"
        />
      </Link>

      <div
        className={`flex flex-1 flex-col gap-2 ${type === "grid" && "px-2"}`}
      >
        <div
          className={`flex justify-between ${type === "grid" && "flex-col"}`}
        >
          <Link to={`/products/${product.id}`} state={{ product }}>
            <h5 className=" whitespace-nowrap text-[20px] font-bold text-textPrimary hover:underline ">
              {shorten(product.name, 23)}
            </h5>
          </Link>
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
          {shorten(product.description, maxDescriptionLength)}
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
