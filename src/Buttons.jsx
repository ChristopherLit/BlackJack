import { motion } from 'framer-motion';

function Buttons() {

    return (

        <div className='buttons'>
      <motion.button
        className='Hit'
        id="Hit"
        whileHover={{ scale: 1.1 }}
        initial={{ x: '60%', y: '800%' }}
        whileTap={{ scale: 0.88 }}
        onClick={() => null}
      >
        Hit
      </motion.button>

      <motion.button 
      className='Stand'
      id="Stand"
      whileHover={{ scale: 1.1 }}
        initial={{ x: '-120%', y: '800%' }}
        whileTap={{ scale: 0.88 }}
        onClick={() => null}
        >
      Stand
      </motion.button>
      </div>


    );

}

export default Buttons