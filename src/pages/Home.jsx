import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { menu } from "../data/menuData";
import CategoryCardLoader from "../components/CategoryCardLoader"; // loader komponent
import "../styles/home.css";


const Home = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [searchParams] = useSearchParams();
  const tableNumber = searchParams.get("table"); // Stol raqamini olish
  
  if (tableNumber){
     console.log(tableNumber)
  }

  const handleImageLoad = (category) => {
    setLoadedImages((prev) => ({
      ...prev,
      [category]: true,
    }));
  };

  return (
    <div className="home-page">
      <div className="category-list-container">
        <div className="category-list">
          {menu.map((cat) => (
            <div key={cat.category} style={{ position: "relative" }}>
              
              {/* Loader ustiga chiqqan holatda */}
              {!loadedImages[cat.category] && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                  }}
                >
                  <CategoryCardLoader count={1} />
                </div>
              )}

              {/* Asl karta */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loadedImages[cat.category] ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/category/${cat.category.toLowerCase()}`}
                  className="category-card"
                >
                  <img
                    src={cat.image}
                    alt={cat.category}
                    className="category-image"
                    onLoad={() => handleImageLoad(cat.category)}
                    onError={() => handleImageLoad(cat.category)}
                  />
                  <div className="category-title">
                    {cat.category}
                  </div>
                </Link>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
