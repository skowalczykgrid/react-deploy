import Counter from "../../components/Counter";

function CartItem({ product }) {
  return (
    <div className="flex items-center gap-6">
      <img
        src={product.thumbnail}
        alt={product.name}
        className="h-[104px] w-[149px] rounded-lg"
      />
      <div className=" flex flex-col gap-2">
        <h4 className="w-[300px] text-[22px] font-bold leading-6 text-textPrimary">
          {product.name}
        </h4>
        <p className="text-base font-light text-textPrimary">
          ${product.price}
        </p>
      </div>
      <Counter quantity={product.quantity} id={product.id} />
      <span className="ml-5 text-base font-light text-textPrimary">
        ${product.price}
      </span>
    </div>
  );
}

export default CartItem;
