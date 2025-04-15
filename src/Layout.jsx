import { Outlet } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
import Animation from "./components/Animation";
import './styles/layout.css';

const Layout = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setData("Ma'lumot yuklandi!");
            setLoading(false);
        }, 1000);
    }, []);

    const localTitle = useMemo(() => {
        const path = location.pathname.toLowerCase();
        if (path === "/") return 'Assalomu aleykum';
        if (path.includes("ichimliklar")) return 'Ichimliklar';
        if (path.includes("shirinliklar")) return 'Shirinliklar';
        return '';
    }, [location.pathname]);

    function back() {
        navigate(-1);
    }

    return (
        <div className="container">
            {loading && <Loader />}
            <header>
                <div className="logo">logo</div>
                {location.pathname !== "/" && (
                    <div className="back" onClick={() => back()}>
                        <Animation>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
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

            <footer style={{ marginTop: '30px', textAlign: 'center' }}>
                &copy; 2025 | My Menu App
            </footer>
        </div>
    );
};

export default Layout;