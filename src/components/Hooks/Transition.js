import { AnimatePresence, motion } from "framer-motion";
import "./Transition.css";
import { useLocation } from "react-router-dom";

export default function Transition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, y: 20 }}
      >
        {children}
        {/* </motion.div> */}
      </motion.div>
    </AnimatePresence>
  );
}
