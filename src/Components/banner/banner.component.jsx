import React from "react";
import "./banner.style.scss";

const Banner = ({
  imageUrl,
  title,
  price,
  sideImageUrl1,
  sideImageUrl2,
  sideImageUrl3,
  sideImageUrl4,
}) => {
  return (
    <div className="banner-container">
      <div className="main-image">
        <div className="add-to-wishlist-banner">❤️</div>
        <img src={imageUrl} alt={title} />
        <div className="add-to-cart">+ Add to cart</div>
        <h3>{title}</h3>
        <h3>{price}</h3>
      </div>

      <div className="secondary-images">
        <div className="row">
          <div>
            <div className="add-to-wishlist-banner">❤️</div>
            <img src={sideImageUrl1} alt={title} />
            <div className="add-to-cart">+ Add to cart</div>
            <h3>{title}</h3>
            <h3>{price}</h3>
          </div>
          <div>
            <div className="add-to-wishlist-banner">❤️</div>
            <img src={sideImageUrl2} alt={title} />
            <div className="add-to-cart">+ Add to cart</div>
            <h3>{title}</h3>
            <h3>{price}</h3>
          </div>
        </div>
        <div className="row">
          <div>
            <div className="add-to-wishlist-banner">❤️</div>
            <img src={sideImageUrl3} alt={title} />
            <div className="add-to-cart">+ Add to cart</div>
            <h3>{title}</h3>
            <h3>{price}</h3>
          </div>
          <div>
            <div className="add-to-wishlist-banner">❤️</div>
            <img src={sideImageUrl4} alt={title} />
            <div className="add-to-cart">+ Add to cart</div>
            <h3>{title}</h3>
            <h3>{price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
