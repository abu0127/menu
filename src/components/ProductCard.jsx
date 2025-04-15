import Animation from "./Animation";
import "../styles/product-card.css";

const ProductCard = ({ name, price, image }) => (
  <Animation>
    <div className="product-card">
      <div className="product-image">
        <img src={image || "/default-product.png"} alt={name} />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <p className="price">{price} so'm</p>
      </div>
    </div>
  </Animation>
);

export default ProductCard;