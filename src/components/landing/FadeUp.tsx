import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeUp = ({ children, delay = 0, className }: FadeUpProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default FadeUp;
