import ButtonGreen from "../../../components/ButtonGreen";

function CategoryCard({ product }) {
  if (!product)
    return (
      <div className="h-[272px] w-[272px] rounded-full bg-[#F8F8FD]"></div>
    );

  return (
    <article className="group flex flex-col items-center gap-8 py-12 transition-all hover:translate-y-[-24px]">
      <div className="relative h-[272px] w-[272px] rounded-full">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-full w-full rounded-full object-cover transition-all group-hover:shadow-2xl"
        />
        <div className="opacity-0 transition-all group-hover:opacity-100">
          <ButtonGreen style={{ bottom: "33px" }}>View Details</ButtonGreen>
        </div>
      </div>
      <h5 className="text-center text-[20px] font-bold text-textPrimary">
        {product.category}
      </h5>
    </article>
  );
}

export default CategoryCard;
