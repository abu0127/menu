import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState(1);

  // 🟡 URL'dan table number olish (hashdan)
  useEffect(() => {
    const hash = window.location.hash;
    const queryString = hash.split('?')[1];
    if (queryString) {
      const params = new URLSearchParams(queryString);
      const table = params.get('table');
      if (table) {
        setTableNumber(table);
      }
    }
  }, []);

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
        clearCart,
        isCartOpen,
        toggleCart,
        cartTotal,
        cartItemsCount,
        cartTotalQuantity,
        tableNumber,       // ← Bu yerda context ichiga qo‘shildi
        setTableNumber     // ← Agar kerak bo‘lsa, o‘zgartirish uchun
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
