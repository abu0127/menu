import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Loader from "./components/Loader";
import Animation from "./components/Animation";
import './styles/layout.css';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const localTitle = useMemo(() => {
    const path = location.pathname.toLowerCase();
    if (path === "/") return 'Assalomu aleykum';
    if (path.includes("ichimliklar")) return 'Ichimliklar';
    if (path.includes("shirinliklar")) return 'Shirinliklar';
    return '';
  }, [location.pathname]);

  const handleBack = () => navigate(-1);

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <div className="logo">LOGO</div>
            {location.pathname !== "/" && (
              <div className="back" onClick={handleBack}>
                <Animation>
                  <i class="fa-solid fa-arrow-right-to-bracket"></i>
                </Animation>
              </div>
            )}
            <div className="location">
              <Animation key={localTitle}>
                {localTitle}
              </Animation>
            </div>
          </header>

          <main>
            <Outlet />
          </main>

          <footer>
            &copy; {new Date().getFullYear()} | My Menu App
          </footer>
        </>
      )}
    </div>
  );
};

export default Layout;