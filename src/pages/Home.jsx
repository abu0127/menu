import { Link } from "react-router-dom";
import { menu } from "../data/menuData";
import Animation from "../components/Animation";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h2>Menu Kategoriyalari</h2>
      <ul className="category-list">
        {menu.map((cat, i) => (
          <li key={i}>
            <Animation>
              <Link 
                to={`/category/${cat.category.toLowerCase()}`}
                className="category-link"
              >
                {cat.category}
              </Link>
            </Animation>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;