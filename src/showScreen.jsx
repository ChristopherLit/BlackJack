import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { circleAnimation } from "./blackjack";

const ShowScreen = () => {
    const [showBox, setShowBox] = useState(false);

    const showAnimation = () => {
        setShowBox(true);
       
    };

    circleAnimation(showAnimation);

    return (
     
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
        }}
        style={{
            width: '300px',
            height: '300px', 
            borderRadius: '50%',
            backgroundColor: 'white',
            left: '38%',
            top: '20%',
            position: 'absolute',
            zIndex: 6,
        }}
    />
    
    );
}

export default ShowScreen;
