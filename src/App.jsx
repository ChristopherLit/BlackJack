import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Modal from './Modal';
import Board from './Board';
import Buttons from './Buttons';
import Menu from './Menu';
import { switchIcon } from './Audio';
import { muteMusic } from './Audio';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const toggleSound = () => setIsSoundOn(!isSoundOn);


  return (
    <div id='full-layout' className='full-layout'>
      <div className='game-layout'>
    

        <Board></Board>
        <Buttons></Buttons>
        <Menu></Menu>

        
        <div
          id="Sound-Icon"
          onClick={() => {
            toggleSound();
            switchIcon(isSoundOn, setIsSoundOn);
            muteMusic(isSoundOn);
          }}
          style={{
            width: '3.5%',
            height: '5%',
            borderRadius: '35%',
            backgroundColor: '#283a57',
            objectFit: 'cover',
            position: 'absolute',
            top: '5%',
            right: '5%',
            marginTop: '0',
            marginRight: '0',
            zIndex: '3',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundImage: `url('./src/assets/Music ${isSoundOn ? 'On' : 'Off'}.png')`,
          }}
        ></div>
     
        
        

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
