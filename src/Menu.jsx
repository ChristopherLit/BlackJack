import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { showTheMenu, startEverything } from "./blackjack";
import './App.css';
import { openTheModal } from './blackjack';
import { setBank, getBank} from './blackjack';
import { playSound } from './Audio';

const Menu = () => {
    const [showBox, setShowBox] = useState(false);
    const [message, setMessage] = useState(""); // State to hold the message

    const showMenu = (msg) => {
        setMessage(msg);
        setShowBox(true);
    };

    showTheMenu(showMenu);

    const handleStartClick = () => {

        openTheModal();
        console.log(getBank());
      
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
                onClick={() => { handleStartClick(); playSound(); }}
            >
                Start
            </motion.button>
        </motion.div>
    )}
    </>
    );
}

export default Menu;
