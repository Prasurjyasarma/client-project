import "./product-list.style.scss";

const ProductList = ({ imageUrl, title, price }) => {
  return (
    <div className="small-cards">
      <div className="product-card">
        <div className="add-to-wishlist">❤️</div>
        <img className="product-image" src={imageUrl} alt={title} />
        <div className="add-to-cart">+ Add to cart</div>
        <div className="product-details">
          <h2 className="product-title">{title}</h2>
          <h3 className="product-price">{price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
