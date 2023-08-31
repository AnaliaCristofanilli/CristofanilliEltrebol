import { useContext } from "react";
import CartContext from "../context/cartContex";

const CartWidget = () => {
  const { longitud } = useContext(CartContext);
  return (
    <button className="bg-body-tertiary buttonCarrito">
      <img
        alt="Librería El trébol"
        src="../assets/images/carrito.png"
        width="60em"
        height="60em"
      />
      &nbsp;&nbsp;{longitud}
    </button>
  );
};

export default CartWidget;
