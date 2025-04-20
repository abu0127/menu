import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Loader from "./components/Loader";
import Animation from "./components/Animation";
import CartModal from "./components/CartModal"; // Create this component
import { useCart } from "./components/CartContext";

import './styles/layout.css';
import "./styles/modal.css";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleCart, isCartOpen, cartTotalQuantity } = useCart();


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const localTitle = useMemo(() => {
    const path = location.pathname.toLowerCase();
    if (path === "/") return '';
    if (path.includes("ichimliklar")) return 'Ichimliklar';
    if (path.includes("shirinliklar")) return 'Shirinliklar';
    return '';
  }, [location.pathname]);

  const handleBack = () => navigate(-1);

  return (
    <div className="container">
      {loading ? (
       <Animation>
        <Loader />
</Animation>
      ) : (
        <>
          <header>
            {location.pathname !== "/" && (
              <div className="back" onClick={handleBack}>
                <Animation key={`back-${location.pathname}`}>
                  <i className="fa-solid fa-arrow-left"></i>
                </Animation>
              </div>
            )}
            <div className="logo">
              <Animation key={`logo-${localTitle}`}>
                <span>Martian</span>
              </Animation>
              {/* <div className="location">
                <Animation key={`location-${localTitle}`}>
                  {localTitle}
                </Animation>
              </div> */}
            </div>

            {location.pathname !== "/" && (
              <button className="cart-plus " onClick={toggleCart}>
                <Animation>
                  <i className="fas fa-cart-plus"></i>
                </Animation>
                
                  <span className={ cartTotalQuantity ? "countProducts " : 'hide'}>
                    {cartTotalQuantity}
                  </span>
                
              </button>
            )}
          </header>

          <main>
            <Outlet />
          </main>

          <footer>
            &copy; {new Date().getFullYear()} | My Menu App
          </footer>

          {isCartOpen && <CartModal />}
        </>
      )}
    </div>
  );
};

export default Layout;