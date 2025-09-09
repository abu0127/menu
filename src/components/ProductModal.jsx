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
          transition={{ type: 'spring', damping: 23, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="product-modal-header">
        
            <button className="modal-close-btn" onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="modal-image-container">
            {product.discount > 0 && (
              <div className="discount-flag">
               
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

              <div className="sizes-table-wrapper">
            <table className="sizes-table">
              <thead>
                <tr>
                  <th>Hajm</th>
                  <th>Narx</th>
                </tr>
              </thead>
              <tbody>
                {product.sizes.map((size) => (
                  <tr key={size.label}>
                    <td>{size.label}</td>
                    <td>{size.price.toLocaleString()} so'm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;