import { useContext } from "react";
import { CartContext } from "../../context/cart-context/cart-context";
import "./cart-bar.style.scss";

const CartBarIcon = () => {
  const { setIsCartOpen, CartSlideAnimationIn } = useContext(CartContext);

  const OpenCartBar = () => {
    setIsCartOpen(true);
    CartSlideAnimationIn();
  };
  return (
    <>
      <h2>
        <i className="fa-solid fa-cart-shopping" onClick={OpenCartBar}></i>
      </h2>
    </>
  );
};

export default CartBarIcon;
