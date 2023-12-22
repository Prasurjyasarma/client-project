// WomenApparel.js
import React from "react";
import ProductList from "../../../Components/product-list/product-list.component";
import WOMEN_APPAREL_DATA from "../../../data/women-apparel";

const WomenApparel = () => {
  return (
    <div>
      <h1>This is women apparel</h1>
      {WOMEN_APPAREL_DATA.map((category) =>
        category.items.map((item) => (
          <ProductList
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.name}
          />
        ))
      )}
    </div>
  );
};

export default WomenApparel;
