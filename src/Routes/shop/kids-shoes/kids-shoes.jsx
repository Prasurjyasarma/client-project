import ProductList from "../../../Components/product-list/product-list.component";
import WOMEN_SHOES_DATA from "../../../data/women-shoes";

const KidsShoes = () => {
  return (
    <div>
      <h1>Kids Shoes</h1>
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

export default KidsShoes;
