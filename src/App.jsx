import { useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import './App.css';
import Modal from './Modal';
import Board from './Board';
import Buttons from './Buttons'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (

    <div id='full-layout' className='full-layout'>
    <div className='game-layout'>

      <div className='title'>
        <h1>BlackJack</h1>
      </div>

      <Board></Board>
      <Buttons></Buttons>

      
      
      

      
      
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

 


    </div>
    </div>
  );
}

export default App;
