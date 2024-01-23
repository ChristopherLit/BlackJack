import { motion } from "framer-motion";
import { useEffect } from "react";
import './App.css';
import Backdrop from './Backdrop';
import betting from './betting';
import ContainerChips from "./ContainerChips";

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

const Modal = ({ handleClose, text }) => {
  // Run the betting function when the component mounts
  useEffect(() => {
    betting();

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
            <ModalButton className="Half" label="Half"></ModalButton>
            <ModalButton className="All-In" label="All In"></ModalButton>
            
            <ContainerChips /> 
           
            <div id = 'amount-to-bet' className='amount-to-bet'>500</div>
            <ModalButton
              className="Deal"
              label="Deal"
              onClick={handleClose}
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
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.88 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
