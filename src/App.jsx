import { useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import './App.css';
import Modal from './Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className='game-layout'>
      <h1 className='title'>BlackJack</h1>

      <motion.button
        className='Hit'
        whileHover={{ scale: 1.1 }}
        initial={{ x: '60%', y: '800%' }}
        whileTap={{ scale: 0.88 }}
        onClick={() => null}
      >
        Hit
      </motion.button>

      <motion.button 
      className='Stand'
      whileHover={{ scale: 1.1 }}
        initial={{ x: '-120%', y: '800%' }}
        whileTap={{ scale: 0.88 }}
        onClick={() => null}
        >
      Stand
      </motion.button>
      
      
      <button // TEMPORARY
  onClick={() => (modalOpen ? close() : open())}
  style={{
    position: 'fixed',
    bottom: '30px', 
    right: '30px', 
  }}
>
  test
</button>


      <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitVariant={true}
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => null}

    
  >
    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
  </AnimatePresence>

  <div id="dealer-cards">
    <img id="hidden" src="./public/BACK.png"/>
  
  </div>

  <div id="your-cards"></div>

  




    </div>
  );
}

export default App;
