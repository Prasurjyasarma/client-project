import { useContext } from "react";
import { SideBarContext } from "../../context/side-bar-context/side-bar.context";

const SideBarIcon = () => {
  const { setIsSideBarOpen, slideAnimationIn } = useContext(SideBarContext);
  const openSideBar = () => {
    slideAnimationIn();
    setIsSideBarOpen(true);
  };
  return (
    <>
      <h2>
        <i className="fa-solid fa-bars" onClick={openSideBar}></i>
      </h2>
    </>
  );
};

export default SideBarIcon;
