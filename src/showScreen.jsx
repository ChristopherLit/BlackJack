import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { circleAnimation } from "./blackjack";
import './App.css';

const ShowScreen = () => {
    const [showBox, setShowBox] = useState(false);
    const [message, setMessage] = useState(""); // State to hold the message

    const showAnimation = (msg) => {
        setMessage(msg); // Set the message in the state
        setShowBox(true);
    };

    circleAnimation(showAnimation);

    return (
        <>
            {showBox && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                        duration: 2, // 3 seconds
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    onAnimationComplete={() => setShowBox(false)}
                    style={{
                        width: '25%',
                        height: '40%', 
                        borderRadius: '50%',
                        backgroundColor: '#223043',
                        right: '5%',
                        top: '30%',
                        position: 'absolute',
                        zIndex: 6,
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <div className="textInCircle">
                        {message}
                    </div>
                </motion.div>
            )}
        </>
    );
}

export default ShowScreen;
