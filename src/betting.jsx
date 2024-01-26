import './Modal.jsx';
import {getBank} from './blackjack.js';

function betting() {
    document.getElementById("Chip1").addEventListener("click", add1);
    document.getElementById("Chip5").addEventListener("click", add5);
    document.getElementById("Chip25").addEventListener("click", add25);
    document.getElementById("Chip100").addEventListener("click", add100);
    document.getElementById("Chip500").addEventListener("click", add500);
    document.getElementById("Half").addEventListener("click", half);
    document.getElementById("All-In").addEventListener("click", allIn);
    document.getElementById("Clear").addEventListener("click", clear);

    let total = 0; //Make total equal to their betting amount
  
    function add1() {
      updateBettingAmount(1);
    }
  
    function add5() {
      updateBettingAmount(5);
    }
  
    function add25() {
      updateBettingAmount(25);
    }
  
    function add100() {
      updateBettingAmount(100);
    }
  
    function add500() {
      updateBettingAmount(500);
    }

    function half() {

      let yourContainer = document.getElementById("amount-to-bet");
      total = getBank() / 2;
      yourContainer.textContent = total;

      console.log(bank + "");

    }

    function allIn() {

      let yourContainer = document.getElementById("amount-to-bet");
      total = getBank();
      yourContainer.textContent = total;


    }

    function clear() {

      let yourContainer = document.getElementById("amount-to-bet");
      total = 0;
      yourContainer.textContent = "0";

    }
  
    function updateBettingAmount(amount) {

        let yourContainer = document.getElementById("amount-to-bet");
        total += amount;
        yourContainer.textContent = total;
    

    }
  }
  
  export default betting;
  