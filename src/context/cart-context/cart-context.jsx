import React, { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  right: "-5px",
  CartSlideAnimation: () => {},
  CartSlideAnimationIn: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [right, setRight] = useState("-5px");

  const CartSlideAnimation = () => {
    setRight("-300px");
  };

  const CartSlideAnimationIn = () => {
    setRight("-5px");
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    right,
    CartSlideAnimation,
    CartSlideAnimationIn,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
