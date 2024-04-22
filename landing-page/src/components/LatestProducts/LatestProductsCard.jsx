import WishlistIcon from "../WishlistIcon";
import GoToProduct from "../GoToProduct";
import AddToCart from "../AddToCartButton";

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
    <article className="group  flex h-[304px] w-[416px] flex-col gap-3 ">
      <div className="relative h-[272px] w-full">
        <div className="absolute bottom-0 m-2 flex flex-col space-y-2 opacity-0 transition-all group-hover:opacity-100">
          <AddToCart color="#7E33E0" hoverBgColor="#E5E0FC" product={product} />
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
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-full w-full rounded-md object-cover shadow-lg transition-all group-hover:shadow-xl"
        />
      </div>

      <div className="grid grid-cols-[1fr_max-content_max-content] grid-rows-1 items-center gap-4">
        <span className="text-base font-light text-textPrimary">
          {truncatedName}
        </span>

        <span className="self-center text-base font-light text-textPrimary">
          ${product.price}
        </span>

        <span className="self-center text-[14px] font-light text-primary">
          ${product.wasPrice}
        </span>
      </div>
    </article>
  );
}

export default LatestProductsCard;
