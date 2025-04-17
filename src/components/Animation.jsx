import { motion } from "framer-motion";

const Animation = ({ children, key }) => (
  <motion.div
    key={key}
    initial={{ opacity: 0, x: 5 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 5 }}
    transition={{ duration: 1.2 }}
  >
    {children}
  </motion.div>
);

export default Animation;