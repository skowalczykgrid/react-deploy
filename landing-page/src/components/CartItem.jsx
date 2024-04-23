import Counter from "./Counter";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { AppContext } from "../App";

function CartItem({ product }) {
  const { setCart } = useContext(AppContext);

  const deleteFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="group flex items-center gap-6">
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
      <IconButton
        className="invisible opacity-0 group-hover:visible group-hover:opacity-100"
        onClick={() => deleteFromCart(product.id)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default CartItem;
