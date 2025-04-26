import { useState, useEffect } from 'react';
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductCardLoader from "../components/ProductCardLoader"; // Yangi loader komponenti
import ProductModal from "../components/ProductModal";
import "../styles/products.css";

const CategoryPage = () => {
  const category = useLoaderData();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ma'lumotlar yuklanganligini simulyatsiya qilish
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="category-container">
      <div className="products-grid">
        {isLoading ? (
          // Yuklanayotganda loader ko'rsatamiz
          <ProductCardLoader count={6} />
        ) : (
          // Yuklanganidan keyin mahsulotlarni ko'rsatamiz
          category.items.map(item => (
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
                size={item.size}
              />
            </div>
          ))
        )}
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