import { useContext } from "react";
import { AppContext } from "../../App";
import CartItem from "./CartItem";

function CartContent() {
  const { cart } = useContext(AppContext);
  return (
    <div className="flex flex-col gap-6 self-start">
      {cart.map((product, index) => {
        return <CartItem key={index} product={product} />;
      })}
    </div>
  );
}

export default CartContent;
