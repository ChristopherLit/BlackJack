import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className='game-layout'>
      <h1 className='title'>BlackJack</h1>

      <motion.button
        className='Hit'
        whileHover={{ scale: 1.1 }}
        initial={{ x: '60%', y: '300%' }}
        whileTap={{ scale: 0.88 }}
        onClick={() => null}
      >
        Hit
      </motion.button>

      <motion.button 
      className='Stand'
      whileHover={{ scale: 1.1 }}
        initial={{ x: '-120%', y: '300%' }}
        whileTap={{ scale: 0.88 }}
        onClick={() => null}
        >
      Stand
      </motion.button>
    </div>
  );
}

export default App;
