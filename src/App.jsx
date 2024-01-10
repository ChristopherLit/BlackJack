
import { useState } from 'react';
import { motion } from "framer-motion"
import './App.css';

function App() {

  return (
        <div className='game-layout'>
        <h1 className='title'>BlackJack</h1>
        <button className="Hit">Hit</button>
        <button className="Stand">Stand</button>
      </div>    
  );
}

export default App;
