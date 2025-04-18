import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';
import '../styles/modal.css';

const CartModal = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    toggleCart, 
    cartTotal,
    itemCount,
    clearCart
  } = useCart();

  const formatPrice = (price) => {
    return price?.toLocaleString('uz-UZ', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }) + ' so\'m';
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={toggleCart}>
        <motion.div
          className="modal-content cart-modal"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 12 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2 className="cart-title">Savat <span>({itemCount} ta)</span></h2>
            <button className="modal-close-btn" onClick={toggleCart}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Savat bo'sh</p>
              <button className="continue-shopping" onClick={toggleCart}>
                Xarid qilishni davom eting
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items-container">
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.quantity}`} className="cart-item">
                      <div className="cart-item-image">
                        <img 
                          src={item.image || "/images/default-product.png"} 
                          alt={item.name}
                          onError={(e) => {
                            e.target.src = "/images/default-product.png";
                          }}
                        />
                      </div>
                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <div className="cart-item-price">
                          {item.discount ? (
                            <>
                              <span className="discounted-price">
                                {formatPrice(item.price)}
                              </span>
                              <span className="original-price">
                                {formatPrice(item.originalPrice)}
                              </span>
                              <span className="discount-badge">
                                -{item.discount}%
                              </span>
                            </>
                          ) : (
                            <span>{formatPrice(item.price)}</span>
                          )}
                        </div>
                        <div className="cart-item-actions">
                          <div className="quantity-control">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Kamaytirish"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Ko'paytirish"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            className="remove-btn"
                            onClick={() => removeFromCart(item.id)}
                            aria-label="O'chirish"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cart-summary">
                <div className="cart-total">
                  <span>Jami:</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                
                <div className="cart-buttons">
                  <button 
                    className="clear-cart-btn"
                    onClick={clearCart}
                  >
                    <i className="fa-solid fa-trash"></i> Savatni tozalash
                  </button>
                  <button className="checkout-btn">
                    <i className="fa-solid fa-credit-card"></i> Buyurtma berish
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CartModal;