import { Link } from "react-router-dom";
import { menu } from "../data/menuData";
import Animation from "../components/Animation";

const Home = () => {
    return (
        <div>
            <main>
                <ul className="category-list">
                    {menu.map((cat, i) => (
                        <li key={i}>
                            <Animation>
                                <Link to={`/category/${cat.category.toLowerCase()}`}>
                                    {cat.category}
                                </Link>
                            </Animation>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default Home;