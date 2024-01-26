import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.19
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Chip = ({ id }) => (
  <motion.div
    className="chip"
    id={id}
    variants={item}
  />
);

const ContainerChips = () => (
  <motion.div
    className="container-chips"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[1, 5, 25, 100, 500].map((value) => (
      <Chip key={value} id={`Chip${value}`} />
    ))}
  </motion.div>
);

export default ContainerChips;
