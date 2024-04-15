import { Link } from "react-router-dom";

function TrendingProductsCard({ product }) {
  if (!product)
    return <div className=" h-[232px] w-[272px] rounded-lg bg-[#F8F8FD]"></div>;
  return (
    <Link to={`/products/${product.id}`} state={{ product }}>
      <article className=" flex h-[344px] w-[304px] flex-col gap-6 rounded-lg p-4 shadow-lg transition-all hover:translate-y-[-24px] hover:shadow-2xl">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-[232px] w-[272px] rounded-md object-cover"
        />
        <div className="flex flex-col items-center gap-2">
          <h6 className="text-center text-base font-bold text-primary">
            {product.category}
          </h6>
          <div className="flex gap-4">
            <span className="text-base font-light text-textPrimary">
              ${product.price}
            </span>
            <span className="text-grey-3 text-[14px] font-light line-through">
              ${product.wasPrice}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default TrendingProductsCard;
