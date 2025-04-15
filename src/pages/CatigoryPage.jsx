import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/category.css";

const CategoryPage = () => {
  const category = useLoaderData();
  
  return (
    <div className="category-container">
      <h1 className="category-title">{category.category}</h1>
      <div className="products-grid">
        {category.items.map(item => (
          <ProductCard 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;