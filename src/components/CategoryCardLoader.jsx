import { motion } from "framer-motion";
import "../styles/category-card-loader.css"; // Yangi CSS file

const CategoryCardLoader = ({ count = 1 }) => {
  const loaders = Array(count).fill(0);

  return (
    <>
      {loaders.map((_, index) => (
        <motion.div
          key={index}
          className="category-card-loader"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="loader-image"></div>
        </motion.div>
      ))}
    </>
  );
};

export default CategoryCardLoader;
