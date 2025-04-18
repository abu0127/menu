import { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import "../styles/products.css";

const CategoryPage = () => {
  const category = useLoaderData();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="category-container">
      <div className="products-grid">
        {category.items.map(item => (
          <div
            key={item.id}
            onClick={() => item.isOnSale && setSelectedProduct(item)}
          >
            <ProductCard
              product={item}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
              originalPrice={item.originalPrice}
              discount={item.discount}
              isOnSale={item.isOnSale}
            />
          </div>
        ))}
      </div>

      {/* Modal oynasi */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default CategoryPage;