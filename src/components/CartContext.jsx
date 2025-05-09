import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);

      const finalPrice = product.discount
        ? product.originalPrice - (product.originalPrice * product.discount / 100)
        : product.originalPrice;

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: finalPrice
              }
            : item
        );
      }

      return [...prevItems, {
        ...product,
        quantity: 1,
        price: finalPrice
      }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // ✅ CLEAR CART FUNCTION
  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  const cartItemsCount = cartItems.length;

  const cartTotalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,         // <--- Export qilinmoqda
        isCartOpen,
        toggleCart,
        cartTotal,
        cartItemsCount,
        cartTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
