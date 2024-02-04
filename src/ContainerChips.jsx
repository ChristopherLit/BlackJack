import React from "react";
import { motion } from "framer-motion";
import { updateBettingAmount } from './betting.jsx';
import { getBank } from './blackjack.jsx';
import { getTotal } from './betting.jsx';
import { playChip } from "./Audio.jsx";

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

const handleClick = (value) => {
  if (getTotal() + value > getBank()) {

    console.log("Not enough funds");
   
  } else {
    console.log("Added: " + value);
    updateBettingAmount(value);
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Chip = ({ id, value }) => (
  <motion.div
    className="chip"
    id={id}
    variants={item}
    onClick={() => { handleClick(value); playChip(); }}

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
      <Chip key={value} id={`Chip${value}`} value={value} />
    ))}
  </motion.div>
);

export default ContainerChips;
