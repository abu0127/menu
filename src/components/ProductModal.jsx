import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useCart } from '../components/CartContext';
import '../styles/product-modal.css';

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  function discountPrice(originalPrice, discount = 0) {
    if (discount > 0) {
      return originalPrice - (parseInt(originalPrice) * parseInt(discount) / 100);
    }
    return originalPrice;
  }

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="product-modal-overlay" onClick={onClose}>
        <motion.div
          className="product-modal-content"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <button className="modal-back-btn" onClick={onClose}>
              <i className="fa-solid fa-arrow-left"></i> Orqaga
            </button>
            <button className="modal-close-btn" onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="modal-image-container">
            {product.discount > 0 && (
              <div className="discount-flag">
                -{product.discount}%
              </div>
            )}
            <img
              src={product.image || "/images/default-product.png"}
              alt={product.name}
              className="product-modal-image"
              onError={(e) => {
                e.target.src = "/images/default-product.png";
              }}
            />
          </div>

          <div className="modal-details">
            <h2 className="product-title">{product.name}</h2>

            <div className="price-section">
              <div className="price-row">
                <span className="price-label">Asl narx:</span>
                <span className={product.discount ? "original-price strikethrough" : "original-price"}>
                  {product.originalPrice.toLocaleString()} so'm
                </span>
              </div>
              
              {product.discount > 0 && (
                <>
                  <div className="price-row">
                    <span className="price-label">Chegirma:</span>
                    <span className="discount-value">-{product.discount}%</span>
                  </div>
                  <div className="price-row">
                    <span className="price-label">Yakuniy narx:</span>
                    <span className="final-price">
                      {discountPrice(product.originalPrice, product.discount).toLocaleString()} so'm
                    </span>
                  </div>
                </>
              )}
            </div>

            {product.description && (
              <div className="description-section">
                <h3 className="section-title">Tavsif</h3>
                <p className="product-description">{product.description}</p>
              </div>
            )}

            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              <i className="fas fa-cart-plus"></i> Savatga qo'shish
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;