import "./navigation.style.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";

import SideBarIcon from "../../Components/side-bar-icon/side-bar-icon.component";
import SideBar from "../../Components/side-bar/side-bar.component";
import CartBarIcon from "../../Components/cart-bar-icon/cart-bar-icon";
import CartBar from "../../Components/cart-bar/cart-bar.component";

import { SideBarContext } from "../../context/side-bar-context/side-bar.context";
import { CartContext } from "../../context/cart-context/cart-context";

const Navigation = () => {
  const { isSideBarOpen } = useContext(SideBarContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <div className="humburger-menu">
          <SideBarIcon />
        </div>
        {isSideBarOpen && <SideBar />}

        <Link className="logo-container" to="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0523/9875/1922/files/unze-logo-again-trans.png?v=1668427680"
            alt="logo"
          />
        </Link>

        <div className="nav-links-container">
          <div className="search-bar">
            <label>Search</label>
            <input placeholder="" />
          </div>
          <Link className="nav-link" to="/track-order">
            <h2>Track order</h2>
          </Link>

          <Link className="nav-link" to="#">
            <h2>Login</h2>
          </Link>

          <Link className="nav-link" to="#">
            <h2>Country</h2>
          </Link>

          <Link className="nav-link" to="#">
            <h3>
              <i className="fa-regular fa-heart"></i>
            </h3>
          </Link>
        </div>

        <div className="shop-cart-container">
          <CartBarIcon />
        </div>
        {isCartOpen && <CartBar />}
      </div>
    </>
  );
};

export default Navigation;
