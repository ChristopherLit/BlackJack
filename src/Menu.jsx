import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { showTheMenu, startEverything } from "./blackjack";
import './App.css';

const Menu = () => {
    const [showBox, setShowBox] = useState(false);
    const [message, setMessage] = useState(""); // State to hold the message

    const showMenu = (msg) => {
        setMessage(msg);
        setShowBox(true);
    };

    showTheMenu(showMenu);

    const handleStartClick = () => {
        // Call the function to start everything
        startEverything();

        // Set showBox to false to trigger the exit animation
        setShowBox(false);
    };

    return (
        <>
        {showBox && (<motion.div
            className="menu"
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
                duration: 3,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className="textInMenu">
                {message}
            </div>

            <motion.button
                className='Start'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.88 }}
                onClick={handleStartClick}
            >
                Start
            </motion.button>
        </motion.div>
    )}
    </>
    );
}

export default Menu;
