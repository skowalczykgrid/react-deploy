function FeaturedProductsCard({ product }) {
  if (!product)
    return (
      <div className="] h-[368px] w-[304px] rounded-lg bg-[#F8F8FD]"></div>
    );

  return (
    <article className="mx-3 my-4 flex h-[368px] w-[304px] flex-col items-center gap-4 rounded-lg  shadow-lg">
      <div className="basis-[63%] ">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-full rounded-lg object-cover"
        />
      </div>
      <h3 className="px-3 text-center text-base font-bold text-primary">
        {product.category}
      </h3>
      <p className="text-sm font-light text-[#8A8FB9]">Code - {product.code}</p>
      <p className="mt-[-8px] text-textPrimary">${product.price}</p>
    </article>
  );
}

export default FeaturedProductsCard;
