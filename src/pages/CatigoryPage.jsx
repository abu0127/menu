import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/products.css";

const CategoryPage = () => {
  const category = useLoaderData();
  
  return (
    <div className="category-container">
     
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