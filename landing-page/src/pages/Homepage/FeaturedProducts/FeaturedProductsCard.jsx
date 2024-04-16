import { Link } from "react-router-dom";
import ButtonGreen from "../../../components/ButtonGreen";
import AddToCart from "../../../components/Icons/AddToCart";
import WishlistIcon from "../../../components/Icons/WishlistIcon";
import GoToProduct from "../../../components/Icons/GoToProduct";

function FeaturedProductsCard({ product }) {
  if (!product)
    return (
      <div className=" h-[368px] w-[304px] rounded-lg bg-[#F8F8FD] shadow-lg"></div>
    );

  return (
    <article className="group z-10 mx-3 my-8 flex h-[368px] w-[304px] flex-col items-center gap-4  rounded-lg shadow-lg transition-all hover:translate-y-[-24px] hover:shadow-2xl">
      <div className="relative basis-[63%]">
        <div className="absolute m-2 space-x-2 opacity-0 transition-all group-hover:opacity-100">
          <AddToCart color="#7E33E0" hoverBgColor="#E5E0FC" product={product} />
          <WishlistIcon color="#7E33E0" hoverBgColor="#E5E0FC" />
          <GoToProduct
            product={product}
            color="#7E33E0"
            hoverBgColor="#E5E0FC"
          />
        </div>
        <div className="opacity-0 transition-all group-hover:opacity-100">
          <ButtonGreen>
            <Link to={`/products/${product.id}`} state={{ product }}>
              View Details
            </Link>
          </ButtonGreen>
        </div>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-full rounded-lg object-cover"
        />
      </div>
      <h3 className="no-drag px-3 text-center text-base font-bold text-primary">
        {product.category}
      </h3>
      <p className="text-grey-3 text-sm font-light">Code - {product.code}</p>
      <p className="mt-[-8px] text-textPrimary">${product.price}</p>
    </article>
  );
}

export default FeaturedProductsCard;
