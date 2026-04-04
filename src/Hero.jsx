import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <h1>Elegance Redefined</h1>
      <p>Discover the Timeless Collection of Pehnawa</p>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        SHOP THE COLLECTION
      </motion.button>
    </motion.section>
  );
}
export default Hero;
