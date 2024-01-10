
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Slider } from 'primereact/slider';
import { useState } from 'react';
import { motion } from "framer-motion"
import './Pop.css';

function Pop() {
  const [value1, setValue1] = useState(null);
  
  return (

    <div className="popup-container">
    <button className="Half">Half</button>
    <button className="All-In">All In</button>
    <button className="Deal">Deal</button>
    <div style={{ padding: "10px", width: "110%" }}>
      <p>${value1}</p>
      <Slider value={value1} onChange={(e) => setValue1(e.value)} />
    </div>
  </div>
  );
}

export default Pop;
