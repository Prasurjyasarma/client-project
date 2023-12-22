import ProductList from "../../../Components/product-list/product-list.component";
import WOMEN_SHOES_DATA from "../../../data/women-shoes";

const KidsApparel = () => {
  return (
    <div>
      <h1>Kids Apparel</h1>
      {WOMEN_SHOES_DATA.map((category) =>
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

export default KidsApparel;
