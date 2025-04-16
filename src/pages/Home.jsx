import { Link } from "react-router-dom";
import { menu } from "../data/menuData";
import Animation from "../components/Animation";
import "../styles/home.css";


const Home = () => {
  return (
    <div className="home-page">
      <div className="category-list">
        {menu.map((cat, i) => (
          <Animation key={i}>
            <Link
              to={`/category/${cat.category.toLowerCase()}`}
              className="category-link"
            >
              <div className="category-card">
                {/* Kategoriya rasmi */}
                <div className="category-title">{cat.category}</div>
                <img 
                  src={cat.image} 
                  alt={cat.category} 
                  className="category-image"
                />
               
              </div>
            </Link>
          </Animation>
        ))}
      </div>
    </div>
  );
};

export default Home;