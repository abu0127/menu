import Animation from "./Animation";
import { useCart } from "./CartContext";
import "../styles/product-card.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import audio from '../../public/toy-button.mp3'

function discountPrice(originalPrice, discount = 0) {
  if (discount > 0) {
    return originalPrice - (parseInt(originalPrice) * parseInt(discount) / 100);
  } else {
    return originalPrice;
  }
}

const ProductCard = ({ product, isOnSale }) => {
  const { addToCart } = useCart();
  const audioRef = useRef(null);


  const handleAddToCart = (e) => {
    e.stopPropagation(); // Bu parent elementlarda boshqa click handlerlarni ishga tushirishni oldini oladi
    if (isOnSale) {
      addToCart(product);
    }

    if (audioRef.current === null) {
      audioRef.current = new Audio(audio);
    }
    const sound = audioRef.current;
    sound.currentTime = 0;
    sound.play()
      .catch(err => console.log("savar tugmasi bosilishidagi xatolik", err))


  };

  return (
    <Animation>
      <div className={`product-card ${!isOnSale ? " out-of-stock" : ''}`}>
        <div className="product-image-container">
          <img
            loading="lazy"
            src={product.image || "/images/default-product.png"}
            alt={product.name}
            className="product-image"
            onError={(e) => {
              e.target.src = "/images/default-product.png";
            }}
          />
          {!isOnSale && <div className="out-of-stock-label">Mavjud emas</div>}
          {isOnSale &&

            <div className="product-details">
              <div className="product-name">
                <h3>{product.name}</h3>
                <h5> {product.size}</h5>
              </div>


              <div className="product-footer">
                <div className="all-Price">
                  <span className={product.discount && isOnSale ? "originalPrice-hide" : 'product-price'}>
                    {product.originalPrice.toLocaleString()} <span> so'm</span>
                  </span>
                  <span className={product.discount && isOnSale ? "discount-price" : "discount-hide"}>
                    {discountPrice(product.originalPrice, product.discount).toLocaleString()}<span> so'm</span>
                  </span>
                </div>
                <motion.button
                  className={`product-card-add-to ${!isOnSale ? 'disabled' : ''}`}
                  disabled={!isOnSale}
                  onClick={handleAddToCart}
                  whileTap={{
                    scale: (2.5, 2.5),
                   
                    transition: { duration: 0.5 }
                  }}
                >
                  <i className="fas fa-cart-plus"></i>
                </motion.button>
              </div>
            </div>
          }

        </div>

      </div>
    </Animation>
  );
};

export default ProductCard;