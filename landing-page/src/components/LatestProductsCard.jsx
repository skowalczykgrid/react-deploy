function LatestProductsCard({ product }) {
  if (!product) return <div>Loading</div>;

  const truncatedName =
    product.name.length > 30 ? `${product.name.slice(0, 30)}...` : product.name;

  return (
    <article className="flex h-[304px] w-[416px] flex-col gap-3">
      <img
        src={product.thumbnail}
        alt={product.name}
        className="h-[272px] w-full rounded-md object-cover"
      />
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
