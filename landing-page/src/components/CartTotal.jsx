import { useContext } from "react";
import { AppContext } from "../App";
import ButtonBlackBorder from "./ButtonBlackBorder";

function CartTotal() {
  const { total, setCart } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-8">
      <div className="sticky top-[50px] flex w-[304px] flex-col items-center gap-4 self-start rounded-lg bg-[#F8F8FD] p-6 ">
        <div className=" border-grey-2 flex w-full justify-between border-b-2 pb-4">
          <h5 className="text-base font-bold text-textPrimary">Subtotal:</h5>
          <span className="text-base font-bold text-textPrimary ">
            ${total.toFixed(2)}
          </span>
        </div>
        <div className=" border-grey-2 flex w-full justify-between border-b-2 pb-4">
          <h5 className="text-base font-bold text-textPrimary">Total:</h5>
          <span className="text-base font-bold text-textPrimary ">
            ${(total + 100).toFixed(2)}
          </span>
        </div>
        <div className="  flex w-full justify-between  pb-4">
          <h5 className="text-grey-3 text-base font-light">Shipping:</h5>
          <span className="text-grey-3 text-base font-light ">$100.00</span>
        </div>
        <ButtonBlackBorder>Proceed to checkout</ButtonBlackBorder>
      </div>

      <button
        className="bg-transparent text-base font-light text-primary"
        onClick={() => setCart([])}
      >
        Clear cart
      </button>
    </div>
  );
}

export default CartTotal;
