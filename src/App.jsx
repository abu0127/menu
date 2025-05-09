
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { CartProvider } from './components/CartContext'; // CartContext.js fayl joylashgan manzil

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;