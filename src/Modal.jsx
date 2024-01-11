
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Slider } from 'primereact/slider';
import { useState } from 'react';
import { motion } from "framer-motion"
import './App.css';
import Backdrop from './Backdrop';


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

const Modal = ({handleClose, text}) => {
  const [value1, setValue1] = useState(null);

  return (

    <Backdrop>

      <motion.div
      
      onClick={(e) => e.stopPropagation()}
      className="modal-bet"
      variants={dropIn}
      >

    <div className="popup-container">
    <ModalButton className="Half" label="Half"></ModalButton>
    <ModalButton className="All-In" label="All In"></ModalButton>
    <ModalButton className="Deal" label="Deal" onClick={handleClose}></ModalButton>
    <div style={{ padding: "10px", width: "110%" }}>
      <p>${value1}</p>
      <Slider value={value1} onChange={(e) => setValue1(e.value)} />
    </div>
  </div>

      </motion.div>


    </Backdrop>

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
