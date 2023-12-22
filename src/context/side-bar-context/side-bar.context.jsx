import React, { createContext, useState } from "react";

export const SideBarContext = createContext({
  isSideBarOpen: false,
  setIsSideBarOpen: () => {},
  left: "-5px",
  slideAnimation: () => {},
  slideAnimationIn: () => {},
});

export const SideBarProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [left, setLeft] = useState("-5px");

  const slideAnimation = () => {
    setLeft("-400px");
  };

  const slideAnimationIn = () => {
    setLeft("-5px");
  };

  const value = {
    isSideBarOpen,
    setIsSideBarOpen,
    left,
    slideAnimation,
    slideAnimationIn,
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
