import { motion } from "framer-motion";

const Animation = ({ children, key }) => (
  <motion.div
    key={key}
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 5 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default Animation;