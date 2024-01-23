import { transform } from "framer-motion"

function Message() {

    return (

        <motion.div
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 80 }}
      />



    );
}

export default Message