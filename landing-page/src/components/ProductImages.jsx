function ProductImages({ product }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <img
          src={product.imageSet[0]}
          alt={product.name}
          className="h-[136px] w-[192px] min-w-[192px] rounded-lg object-cover shadow-md"
        />
        <img
          src={product.imageSet[1]}
          alt={product.name}
          className="h-[136px] w-[192px] rounded-lg object-cover shadow-md"
        />
        <img
          src={product.imageSet[2]}
          alt={product.name}
          className="h-[136px] w-[192px] rounded-lg object-cover shadow-md"
        />
      </div>
      <img
        src={product.thumbnail}
        alt={product.name}
        className="h-[438px] w-[528px] rounded-lg object-cover shadow-2xl"
      />
    </>
  );
}

export default ProductImages;
