
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

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


  return (

    <div className = 'betting-window'>

    <Backdrop>

      <motion.div
      
      onClick={(e) => e.stopPropagation()}
      className="modal-bet"
      variants={dropIn}
      >

    <div className="popup-container">
    <ModalButton className="Half" label="Half"></ModalButton>
    <ModalButton className="All-In" label="All In"></ModalButton>

    <div class="container-chips">
        <div class ="chip" id="Chip1"></div>
        <div class ="chip" id="Chip5"></div>
        <div class ="chip" id="Chip25"></div>
        <div class ="chip" id="Chip100"></div>
        <div class ="chip" id="Chip500"></div>
    </div>

    <ModalButton className="Deal" label="Deal" onClick={handleClose}></ModalButton>
    <div style={{ padding: "10px", width: "80%", textAlign: "left" , fontSize: "150%", color: "white"  }}>
 
</div>

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
