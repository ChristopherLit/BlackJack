import React, { useState } from 'react';
import { AnotherFileFunctionYour } from '../blackjack';
import './Animation.css';
import { motion, useAnimation  } from 'framer-motion';

const YourContainer = () => {
  const [divs, setDivs] = useState([]);
  const controls = useAnimation();

  const addDivtoYourContainer = (imageName) => {
    const newDiv = {
        id: divs.length,
        imageName: imageName,
      };
      setDivs([...divs, newDiv]);
    };

    const clearContainer = () => {
      setDivs([]);
    };

  AnotherFileFunctionYour(addDivtoYourContainer, clearContainer);
  

  return (
    <div>
      <div className="your-cards">
        {divs.map((div, index) => (
           <motion.div
           key={div.id}
           className="card"
           initial={{ opacity: 0, y: '-50%' }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: index * 0.2 }}
           style={{
             height: '20%',
             width: '10%',
             margin: '0.5%',
             borderRadius: '2%',
             position: 'relative',
             margin: '3%',
             
          
             
           }}
         >
           <img src={div.imageName} style={{ width: '150%', height: '100%', borderRadius: 'inherit'  }} />
         </motion.div>
        ))}
      </div>
    </div>
  );
};

export default YourContainer;