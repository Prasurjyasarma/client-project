import { useContext } from "react";
import { CartContext } from "../../context/cart-context/cart-context";

import Button from "../buttons/buttons.component";
import "./cart-bar.style.scss";

const CartBar = () => {
  const { right, CartSlideAnimation, setIsCartOpen } = useContext(CartContext);
  const CartBarClose = () => {
    CartSlideAnimation();
    setTimeout(() => {
      setIsCartOpen(false);
    }, 500);
  };

  return (
    <div className="cart-container" style={{ right: right }}>
      <div className="content">
        <h1>your cart is empty</h1>
        <Button buttonType="black" onClick={CartBarClose}>
          Click me
        </Button>
      </div>
    </div>
  );
};

export default CartBar;
