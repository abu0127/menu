import Animation from "./Animation";
import "../styles/product-card.css";

const ProductCard = ({ name, price, image, description }) => (
  <Animation>
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={image || "/images/default-product.png"} 
          alt={name}
          className="product-image"
          onError={(e) => {
            e.target.src = "/images/default-product.png";
          }}
        />
      </div>
      <div className="product-details">
        <h3 className="product-title">{name}</h3>
        {description && <p className="product-description">{description.substring(0, 60)}...</p>}
        <div className="product-footer">
          <span className="product-price">{price.toLocaleString()} so'm</span>
          <button className="add-to-cart-btn">
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </Animation>
);

export default ProductCard;