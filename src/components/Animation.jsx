import { motion } from "framer-motion";

const Animation = ({ children, key }) => (
  <motion.div
    key={key}
    initial={{ opacity: 0, x: 15 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 15 }}
    transition={{ duration: .7 }}
  >
    {children}
  </motion.div>
);

export default Animation;