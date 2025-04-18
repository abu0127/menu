import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';
import '../styles/modal.css';

const CartModal = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    toggleCart, 
    cartTotal 
  } = useCart();

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
          <button className="modal-close-btn" onClick={toggleCart}>
            <i className="fa-solid fa-xmark"></i>
          </button>

          <h2 className="cart-title">Savat</h2>

          {cartItems.length === 0 ? (
            <p className="empty-cart">Savat bo'sh</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img 
                        src={item.image || "/images/default-product.png"} 
                        alt={item.name} 
                      />
                    </div>
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <div className="cart-item-price">
                        {item.discount ? (
                          <>
                            <span className="discounted-price">
                              {(
                                item.originalPrice - 
                                (item.originalPrice * item.discount / 100)
                              ).toLocaleString()} so'm
                            </span>
                            <span className="original-price">
                              {item.originalPrice.toLocaleString()} so'm
                            </span>
                          </>
                        ) : (
                          <span>{item.originalPrice.toLocaleString()} so'm</span>
                        )}
                      </div>
                      <div className="cart-item-actions">
                        <div className="quantity-control">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <span>Jami:</span>
                <span>{cartTotal.toLocaleString()} so'm</span>
              </div>
              <button className="checkout-btn">
                Buyurtma berish
              </button>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CartModal;