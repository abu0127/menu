import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

function discountPrice(originalPrice, discount = 0) {
  if (discount > 0) {
    return originalPrice - (parseInt(originalPrice) * parseInt(discount) / 100);
  } else {
    return originalPrice;
  }
}

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    // Modal ochilganda body scroll ni o'chirish
    document.body.style.overflow = 'hidden';
    return () => {
      // Modal yopilganda body scroll ni qayta yoqish
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="modal-content"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 12 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <div className="modal-image-container">
            <img 
              src={product.image || "/images/default-product.png"} 
              alt={product.name}
              onError={(e) => {
                e.target.src = "/images/default-product.png";
              }}
            />
          </div>
          
          <div className="modal-details">
            <h2>{product.name}</h2>


            <p className="modal-price">{product.originalPrice.toLocaleString()} so'm</p>

            
            {product.description && (
              <p className="modal-description">{product.description}</p>
            )}
            
            <button className="add-to-cart-btn">
              <i className="fas fa-cart-plus"></i> Savatga qo'shish
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;