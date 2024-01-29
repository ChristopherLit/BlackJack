import React, { useState } from 'react';
import { AnotherFileFunctionDealer } from '../blackjack';
import './Animation.css';
import { motion, useAnimation  } from 'framer-motion';

const DealerContainer = () => {
  const [divs, setDivs] = useState([]);
  const controls = useAnimation();

  const addDivtoDealerContainer = (imageName) => {
    const newDiv = {
        id: divs.length,
        imageName: imageName,
      };
      setDivs([...divs, newDiv]);
    };

    const replaceImageInContainer = (oldImage, newImage) => {
        console.log('Replacing image:', oldImage, 'with:', newImage);
        const updatedDivs = divs.map((div) =>
          div.imageName === oldImage ? { ...div, imageName: newImage } : div
        );
        setDivs(updatedDivs);
    };
    
  AnotherFileFunctionDealer(addDivtoDealerContainer, replaceImageInContainer); // Pass the function to the other file

  return (
    <div>
      <div className="dealer-cards">
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

export default DealerContainer;
