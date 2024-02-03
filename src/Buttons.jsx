import { motion } from 'framer-motion';
import { playDeal } from './Audio';


function Buttons() {

    return (

        <div className='buttons'>
      <motion.button
        className='Hit'
        id="Hit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.88 }}
        onClick={() => { null; playDeal();}}
      >
        Hit
      </motion.button>

      <motion.button 
      className='Stand'
      id="Stand"
      whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.88 }}
        onClick={() => { null}}
        >
      Stand
      </motion.button>
      </div>


    );

}

export default Buttons