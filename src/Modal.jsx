import { motion } from "framer-motion";
import { useEffect } from "react";
import './App.css';
import Backdrop from './Backdrop';
import ContainerChips from "./ContainerChips";
import { clear } from "./betting";
import { allIn } from "./betting";
import { half } from "./betting";
import { deal } from "./betting";
import { getBank } from "./blackjack";
import { playSound } from "./Audio";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose }) => {
  // Run the betting function when the component mounts
  useEffect(() => {
   

    // Clean up event listeners when the component unmounts
    return () => {
      // Remove the event listeners or perform any necessary cleanup
    };
  }, []); // Empty dependency array means it runs once after initial render

  return (
    <div className='betting-window'>
      <Backdrop>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal-bet"
          variants={dropIn}
        >
          <div className="popup-container">

            <div className="button-container">
                <ModalButton className="Half" label="Half" onClick={() => { half(); playSound(); }}></ModalButton>
                <ModalButton className="All-In" label="All In" onClick={() => { allIn(); playSound(); }}></ModalButton>
                <ModalButton className="Clear" label="Clear" onClick={() => { clear(); playSound(); }}></ModalButton>
            </div>

            <div id='balance' className='balance'>Balance: {getBank()}</div>
            
            <ContainerChips /> 
           
            <div id = 'amount-to-bet' className='amount-to-bet'>0</div>
            <ModalButton
              className="Deal"
              label="Deal"
              onClick={() => {
                
                deal((result) => {
                  if (result == true) {
                     playSound();
                    handleClose();
                    
                  }
                });
                
              }}
            ></ModalButton>

            <div style={{ padding: "10px", width: "80%", textAlign: "left", fontSize: "150%", color: "white" }}></div>
          </div>
        </motion.div>
      </Backdrop>
    </div>
  );
};

const ModalButton = ({ onClick, label, className }) => (
  <motion.button
    className={`modal-button ${className}`}
    id={`${className}`}
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.88 }}
    onClick={onClick}
    
  >
    {label}
  </motion.button>
);

export default Modal;
