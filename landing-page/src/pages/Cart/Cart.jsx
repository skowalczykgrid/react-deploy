import { useContext } from "react";
import CartContent from "./CartContent";
import CartTotal from "./CartTotal";
import { AppContext } from "../../App";
import cartImg from "../../assets/empty-car.jpeg";
import ButtonBlackBorder from "../../components/ButtonBlackBorder";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(AppContext);

  if (cart.length === 0) {
    return (
      <main className="flex flex-col items-center  gap-8 py-[100px]">
        <img src={cartImg} alt="empty cart" className="h-[287px] w-[387px]" />
        <h3 className=" text-center text-[36px] font-bold text-black ">
          Your cart is empty
        </h3>
        <Link to="/">
          <ButtonBlackBorder>Start Shopping</ButtonBlackBorder>
        </Link>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center gap-[145px] py-[100px]">
      <CartContent />
      <CartTotal />
    </main>
  );
}

export default Cart;
