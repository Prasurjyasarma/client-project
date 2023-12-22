import "./main-directory.style.scss";
import Button from "../buttons/buttons.component";
import { Link } from "react-router-dom";

const Directory = () => {
  return (
    <div className="Main-banner-container">
      <img
        src="https://unze.com.pk/cdn/shop/files/website-desktop-copy-2.jpg?v=1702271128&width=1280"
        alt="Main Banner"
      />

      <div className="Buttons-container-upper-row">
        <Link to="/women-shoes">
          <Button buttonType="black">Women Shoes</Button>
        </Link>

        <Link to="/women-apparel">
          <Button buttonType="black">Women Apparel</Button>
        </Link>

        <Link to="/men-shoes">
          <Button buttonType="black">Men Shoes</Button>
        </Link>
      </div>

      <div className="Buttons-container-lower-row">
        <Link to="/men-apparel">
          <Button buttonType="black">Men Apparel</Button>
        </Link>

        <Link to="/kids-shoes">
          <Button buttonType="black">Kids Shoes</Button>
        </Link>

        <Link to="/kids-apparel">
          <Button buttonType="black">Kids Apparel</Button>
        </Link>
      </div>
    </div>
  );
};

export default Directory;
