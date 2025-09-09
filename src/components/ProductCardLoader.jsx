import { motion } from "framer-motion";
import "../styles/product-card-loader.css";

const ProductCardLoader = ({ count = 1 }) => {
  // Agar bir nechta loader kerak bo'lsa
  const loaders = Array(count).fill(0);
  
  return (
    <>
      {loaders.map((_, index) => (
        <motion.div
          key={index}
          className="product-card-loader"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="loader-image-container">
            <div className="loader-image"></div>
          </div>
          
          <div className="loader-details">
            <div className="loader-name"></div>
            <div className="loader-name-short"></div>
            
            <div className="loader-footer">
              <div className="loader-price-container">
                <div className="loader-price"></div>
                <div className="loader-discount"></div>
              </div>
              <div className="loader-button"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ProductCardLoader;