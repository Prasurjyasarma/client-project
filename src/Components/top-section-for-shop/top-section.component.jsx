import { Link } from "react-router-dom";
import Button from "../buttons/buttons.component";
import "./top-section-for-shop.style.scss";

const TopShopSection = ({ bannerImageURl, iconImageUrl }) => {
  return (
    <div className="top-section-shop">
      {/* Left section */}
      <div className="top-section-shop-left">
        {/* Left section Buttons*/}
        <div className="top-section-shop-left-buttons-top-row">
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

        <div className="top-section-shop-left-buttons-bottom-row">
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

        {/* Left section icons*/}
        <div className="icons-shop">
          <Button buttonType="circle">View all</Button>
          <div className="icon-card-up">
            <img src={iconImageUrl} alt="icon-pictures" />
            <img src={iconImageUrl} alt="icon-pictures" />
            <img src={iconImageUrl} alt="icon-pictures" />
            <img src={iconImageUrl} alt="icon-pictures" />
            <img src={iconImageUrl} alt="icon-pictures" />
            <img src={iconImageUrl} alt="icon-pictures" />
          </div>
          <div className="icon-card-down">
            <img src={iconImageUrl} alt="icon-pictures" />
            <img src={iconImageUrl} alt="icon-pictures" />
          </div>
        </div>
        <div className="filters">
          <select name="filter1" id="filter1">
            <option value="" disabled selected>
              Featured
            </option>
            {/* Other options for select tag 1 */}
          </select>

          <select name="filter2" id="filter2">
            <option value="" disabled selected>
              Size
            </option>
            {/* Other options for select tag 2 */}
          </select>

          <select name="filter3" id="filter3">
            <option value="" disabled selected>
              Colour
            </option>
            {/* Other options for select tag 3 */}
          </select>

          <select name="filter4" id="filter4">
            <option value="" disabled selected>
              Heel type
            </option>
            {/* Other options for select tag 4 */}
          </select>

          <select name="filter5" id="filter5">
            <option value="" disabled selected>
              Heel height
            </option>
            {/* Other options for select tag 5 */}
          </select>
        </div>
      </div>

      {/* Right section */}
      <div className="top-section-shop-right">
        <img src={bannerImageURl} alt="banner-img" />
      </div>
    </div>
  );
};

export default TopShopSection;
