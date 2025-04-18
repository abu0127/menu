import Animation from "./Animation";
import "../styles/product-card.css";

function discountPrice(originalPrice, discount = 0) {
  if (discount > 0) {
    return originalPrice - (parseInt(originalPrice) * parseInt(discount) / 100);
  } else {
    return originalPrice;
  }
}

const ProductCard = ({ name, image, description, originalPrice, discount, isOnSale }) => (
  <Animation>
    <div className={`product-card ${!isOnSale ? 'out-of-stock' : ''}`}>
      <div className="product-image-container">
        <img
          src={image || "/images/default-product.png"}
          alt={name}
          className="product-image"
          onError={(e) => {
            e.target.src = "/images/default-product.png";
          }}
        />
        {!isOnSale && <div className="out-of-stock-label">Mavjud emas</div>}
      </div>
      <div className="product-details">
        <h3 className="product-title">{name}</h3>
        {description && <p className="product-description">{description.substring(0, 60)}...</p>}
        <div className="product-footer">
          <div>
            <span className={discount  && isOnSale ?  "originalPrice-hide" : 'product-price'}>
              {originalPrice.toLocaleString()} so'm
            </span>
            <span className={discount && isOnSale ? "discount-price" : "discount-hide"}>
              {discountPrice(originalPrice, discount).toLocaleString()} so'm
            </span>
          </div>
          <button className={`add-to-cart-btn ${!isOnSale ? 'disabled' : ''}`} disabled={!isOnSale}>
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </Animation>
);

export default ProductCard;