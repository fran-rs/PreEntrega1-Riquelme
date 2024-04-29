import { useContext } from "react";
import cart from "./assets/cart.svg";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div>
      <Link
        to={"/cart"}
        className="CartWidget"
        style={{ display: totalQuantity > 0 ? "block" : "none" }}
      >
        <img height={25} src={cart} alt="cart-widget" /> {totalQuantity}
      </Link>
    </div>
  );
};

export default CartWidget;
