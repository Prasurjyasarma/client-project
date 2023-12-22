import "./product-list.style.scss";

const ProductList = ({ imageUrl, title }) => {
  return (
    <div className="product-list-container">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default ProductList;
