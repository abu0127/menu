// src/components/ProductCard.jsx
import Animation from "./Animation";

const ProductCard = ({ name, price }) => (
    <Animation>
        <div className="product-card">
            <h4>{name}</h4>
            <p>{price} so‘m</p>
        </div>
    </Animation>
);

export default ProductCard;