import React, { useContext } from "react";
import { SideBarContext } from "../../context/side-bar-context/side-bar.context";
import "./side-bar.style.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { left, slideAnimation, setIsSideBarOpen } = useContext(SideBarContext);

  const SideBarClose = () => {
    slideAnimation();
    setTimeout(() => {
      setIsSideBarOpen(false);
    }, 500);
  };

  return (
    <div className="side-bar-container" style={{ left: left }}>
      <div className="cont">
        <div className="top-section">
          <h1>MENU</h1>
          <i class="fa-solid fa-xmark" onClick={SideBarClose}></i>
        </div>
        <div className="tabs">
          <div className="tab">Women</div>
          <div className="tab">Men</div>
          <div className="tab">Kids</div>
        </div>

        <div className="boxes">
          <div className="box">
            <img
              src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="shoes"
            />
            <h3>Shoes</h3>
          </div>
          <div className="box">
            <Link to="/women-apparel">
              <img
                src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Womne"
              />
            </Link>

            <h3>Women</h3>
          </div>
          <div className="box">
            <img
              src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Womne"
            />
            <h3>Women</h3>
          </div>
          <div className="box">
            <img
              src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Womne"
            />
            <h3>Women</h3>
          </div>
          <div className="box">
            <img
              src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Womne"
            />
            <h3>Women</h3>
          </div>
        </div>

        <div className="text-boxes">
          <div className="text-box">Country</div>
          <div className="text-box">My Account</div>
          <div className="text-box">Track your order</div>
          <div className="text-box">Return support</div>
          <div className="text-box">Newsletter Sign-up</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
