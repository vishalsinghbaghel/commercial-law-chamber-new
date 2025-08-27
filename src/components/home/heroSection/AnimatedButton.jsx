import { motion } from "framer-motion";
import styles from "./AnimatedButton.module.css";

export const AnimatedButton = ({ children, variant = "contained" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </motion.button>
  );
};
