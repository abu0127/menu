import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const category = useLoaderData();
  
  return (
    <div className="category-page">
      <h1>{category.category}</h1>
      <div className="products-grid">
        {category.items.map(item => (
          <ProductCard key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}