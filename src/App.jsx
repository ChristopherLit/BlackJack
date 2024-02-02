import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Modal from './Modal';
import Board from './Board';
import Buttons from './Buttons';

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
        
        
        
        

        <button
        id='openModal'
          onClick={() => (modalOpen ? close() : open())}
          style={{
            position: 'fixed',
            bottom: '0px',
            right: '99999px',
            zIndex: '',
          }}
        >
          
        </button>

        <AnimatePresence
          initial={false}
          exitVariant={true}
          onExitComplete={() => null}
        >
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
