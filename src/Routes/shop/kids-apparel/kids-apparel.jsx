import ProductList from "../../../Components/product-list/product-list.component";
import Banner from "../../../Components/banner/banner.component";
import TopShopSection from "../../../Components/top-section-for-shop/top-section.component";

import SHOP_DATA from "../../../data/shop-data";

import { useEffect } from "react";

const KidsApparel = () => {
  //! Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //! for the sideImages in the shop page
  const sideImage1 =
    "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const sideImage2 =
    "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const sideImage3 =
    "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const sideImage4 =
    "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <>
      <>
        {SHOP_DATA.map((topCategories) => {
          if (topCategories.title === "topSectionData") {
            return (
              <TopShopSection
                bannerImageURl={topCategories.imageUrl}
                iconImageUrl={topCategories.iconsImage}
              />
            );
          }
          return null;
        })}
      </>

      <div className="shop-card">
        {SHOP_DATA.map((category) => {
          // Banner
          if (category.title === "banner") {
            return category.items.map((item) => (
              <Banner
                key={item.id}
                imageUrl={item.imageUrl}
                sideImageUrl1={sideImage1}
                sideImageUrl2={sideImage2}
                sideImageUrl3={sideImage3}
                sideImageUrl4={sideImage4}
                title={item.name}
                price={item.price}
              />
            ));
          }

          // Other cards
          else if (category.title === "otherData") {
            return category.items.map((item) => (
              <ProductList
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.name}
                price={item.price}
              />
            ));
          }
          return null;
        })}
      </div>
    </>
  );
};

export default KidsApparel;
