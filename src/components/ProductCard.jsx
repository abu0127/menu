import Animation from "./Animation";
import { useCart } from "./CartContext";
import "../styles/product-card.css";

function discountPrice(originalPrice, discount = 0) {
  if (discount > 0) {
    return originalPrice - (parseInt(originalPrice) * parseInt(discount) / 100);
  } else {
    return originalPrice;
  }
}

const ProductCard = ({ product, isOnSale }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Bu parent elementlarda boshqa click handlerlarni ishga tushirishni oldini oladi
    if (isOnSale) {
      addToCart(product);
    }
  };

  return (
    <Animation>
      <div className={`product-card ${!isOnSale ? " out-of-stock" : ''}`}>
        <div className="product-image-container">
          <img
            src={product.image || "/images/default-product.png"}
            alt={product.name}
            className="product-image"
            onError={(e) => {
              e.target.src = "/images/default-product.png";
            }}
          />
          {!isOnSale && <div className="out-of-stock-label">Mavjud emas</div>}
        </div>
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          {product.description && (
            <p className="product-description">{product.description.substring(0, 60)}...</p>
          )}
          <div className="product-footer">
            <div>
              <span className={product.discount && isOnSale ? "originalPrice-hide" : 'product-price'}>
                {product.originalPrice.toLocaleString()} so'm
              </span>
              <span className={product.discount && isOnSale ? "discount-price" : "discount-hide"}>
                {discountPrice(product.originalPrice, product.discount).toLocaleString()} so'm
              </span>
            </div>
            <button 
              className={`product-card-add-to ${!isOnSale ? 'disabled' : ''}`} 
              disabled={!isOnSale}
              onClick={handleAddToCart}
            >
              <i className="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default ProductCard;