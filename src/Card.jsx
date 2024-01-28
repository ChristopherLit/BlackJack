import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Card = ({ imageUrl }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 }); // Starting with opacity 1 and y-axis at 0
  }, [controls]);

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: '-70%' }} // Starting with opacity 0 and y-axis at -70%
      animate={controls}
      transition={{ duration: 0.5 }}
      style={{
        height: '10%',
        width: '7%',
        margin: '0.5%',
        borderRadius: '2%',
        position: 'relative',
      }}
    >
      <img src={imageUrl} alt="Card" style={{ width: '200%', height: '100%', borderRadius: 'inherit',  }} />
    </motion.div>
  );
};

export default Card;
