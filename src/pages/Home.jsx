import { Link } from "react-router-dom";
import { menu } from "../data/menuData";
import Animation from "../components/Animation";
import ProductCardLoader from "../components/ProductCardLoader"; // ProductCardLoader import qilamiz
import { useState, useEffect } from "react";
import "../styles/home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      {loading ? (
        <div className="category-list">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="category-link-placeholder">
              <ProductCardLoader />
            </div>
          ))}
        </div>
      ) : (
        <div className="category-list">
          {menu.map((cat, i) => (
            <Animation key={i}>
              <Link
                to={`/category/${cat.category.toLowerCase()}`}
                className="category-link"
              >
                <div className="category-card">
                  <div className="category-title">{cat.category}</div>
                  <img 
                    loading="lazy"
                    src={cat.image} 
                    alt={cat.category} 
                    className="category-image"
                  />
                </div>
              </Link>
            </Animation>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;