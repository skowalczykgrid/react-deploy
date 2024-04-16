import { useContext } from "react";
import { AppContext } from "../App";

function Counter({ quantity, id }) {
  const { updateQuantity } = useContext(AppContext);

  return (
    <div className="border-grey-1 flex h-[40px] w-[120px] min-w-[120px] items-center justify-between rounded-lg border-[2px] p-4">
      <button
        className="text-center text-2xl text-textPrimary disabled:opacity-10"
        onClick={() => updateQuantity(id, quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <p className="text-center text-[14px]  text-textPrimary">{quantity}</p>
      <button
        className="text-center text-2xl text-textPrimary"
        onClick={() => updateQuantity(id, quantity + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
