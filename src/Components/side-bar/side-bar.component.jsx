import React, { useContext, useState } from "react";
import { SideBarContext } from "../../context/side-bar-context/side-bar.context";
import "./side-bar.style.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { left, slideAnimation, setIsSideBarOpen } = useContext(SideBarContext);

  const [selectedTab, setSelectedTab] = useState("Women");

  const tabs = ["Women", "Men", "Kids"];

  const SideBarClose = () => {
    slideAnimation();
    setTimeout(() => {
      setIsSideBarOpen(false);
    }, 500);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderBox = (linkTo, imgSrc, imgAlt, heading) => (
    <div className="box">
      <Link to={linkTo}>
        <img src={imgSrc} alt={imgAlt} />
      </Link>
      <h3>{heading}</h3>
    </div>
  );

  const renderImages = () => {
    switch (selectedTab) {
      case "Women":
        return (
          <>
            {renderBox(
              "/women-shoes",
              "https://unze.com.pk/cdn/shop/collections/women_shoes_160x_1118f1f7-b10b-4a38-909f-5078dd1b46a8_300x.jpg?v=1699024831",
              "shoes",
              "Shoes"
            )}
            {renderBox(
              "/women-apparel",
              "https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "cloths",
              "Cloths"
            )}
            {renderBox(
              "/",
              "https://unze.com.pk/cdn/shop/collections/L31777-1_160x_ec0f203a-cfe9-4fd0-84d8-abf6edc771c9_300x.jpg?v=1699022694",
              "new in",
              "NEW IN"
            )}
            {renderBox(
              "/women-apparel",
              "https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "bags & accessories",
              "Bags & Accessories"
            )}
            {renderBox(
              "/",
              "https://unze.com.pk/cdn/shop/collections/cs11790_160x_df4787ba-8447-41dc-82c4-1f24e0adc1f1_300x.jpg?v=1619502017",
              "weekly deal",
              "WEEKLY DEAL"
            )}
            {renderBox(
              "/",
              "https://unze.com.pk/cdn/shop/collections/ms182_160x_ba11f610-d14e-484f-be25-021e5225c7c1_300x.jpg?v=1619501913",
              "sale",
              "SALE"
            )}
          </>
        );
      case "Men":
        return (
          <>
            {renderBox(
              "/men-shoes",
              "https://unze.com.pk/cdn/shop/collections/GS7030-1_160x_5115ca53-1833-43a4-b941-91141738c845_300x.jpg?v=1699025376",
              "men shoes",
              "Men Shoes"
            )}
            {renderBox(
              "/men-apparel",
              "https://unze.com.pk/cdn/shop/collections/shoecare_160x_f0586f20-bebf-4ba4-8329-da685f03fd95_300x.png?v=1700037204",
              "men apparel",
              "Men Apparel"
            )}
            {renderBox(
              "/",
              "https://unze.com.pk/cdn/shop/collections/L31777-1_160x_ec0f203a-cfe9-4fd0-84d8-abf6edc771c9_300x.jpg?v=1699022694",
              "new in",
              "NEW IN"
            )}
            {renderBox(
              "/",
              "https://unze.com.pk/cdn/shop/collections/cs11790_160x_df4787ba-8447-41dc-82c4-1f24e0adc1f1_300x.jpg?v=1619502017",
              "weekly deal",
              "WEEKLY DEAL"
            )}
            {renderBox(
              "/",
              "https://unze.com.pk/cdn/shop/collections/ms182_160x_ba11f610-d14e-484f-be25-021e5225c7c1_300x.jpg?v=1619501913",
              "sale",
              "SALE"
            )}
          </>
        );
      case "Kids":
        return (
          <>
            {renderBox(
              "/kids-shoes",
              "https://unze.com.pk/cdn/shop/collections/CS11779-1_160x_be9f24d3-9f71-4e15-9b29-4bb1f8b4738c_300x.jpg?v=1699026289",
              "girls",
              "Girls"
            )}
            {renderBox(
              "/kids-apparel",
              "https://unze.com.pk/cdn/shop/collections/CS11619-1_160x_d846ae04-6c4d-4a70-bacb-2e2a9084620d_300x.jpg?v=1699026193",
              "boys",
              "Boys"
            )}
            {renderBox(
              "/kids-apparel",
              "https://unze.com.pk/cdn/shop/collections/GS7030-1_160x_5c3f0220-333e-45af-b26c-0b435d6bb3cb_300x.jpg?v=1698402666",
              "clothing",
              "Clothing"
            )}
            {renderBox(
              "/",
              "https://unze.com.pk/cdn/shop/collections/L31777-1_160x_ec0f203a-cfe9-4fd0-84d8-abf6edc771c9_300x.jpg?v=1699022694",
              "new in",
              "NEW IN"
            )}
            {renderBox(
              "/",
              "https://unze.com.pk/cdn/shop/collections/cs11790_160x_df4787ba-8447-41dc-82c4-1f24e0adc1f1_300x.jpg?v=1619502017",
              "weekly deal",
              "WEEKLY DEAL"
            )}
            {renderBox(
              "/",
              "https://unze.com.pk/cdn/shop/collections/ms182_160x_ba11f610-d14e-484f-be25-021e5225c7c1_300x.jpg?v=1619501913",
              "sale",
              "SALE"
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="side-bar-container" style={{ left: left }}>
      <div className="cont">
        <div className="top-section">
          <h1>MENU</h1>
          <i className="fa-solid fa-xmark" onClick={SideBarClose}></i>
        </div>

        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab ${selectedTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="boxes">{renderImages()}</div>

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
