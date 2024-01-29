import './Modal.jsx';
import { getBank } from './blackjack.jsx';
import { setGambled } from './blackjack.jsx';
import { startEverything } from './blackjack.jsx';


let total = 0; //Make total equal to their betting amount

export function half() {

  let yourContainer = document.getElementById("amount-to-bet");
  total = getBank() / 2;
  yourContainer.textContent = total;

}

    

  export function allIn() {

    let yourContainer = document.getElementById("amount-to-bet");
    total = getBank();
    yourContainer.textContent = total;

  }

  export function clear() {

    let yourContainer = document.getElementById("amount-to-bet");
    total = 0;
    yourContainer.textContent = "0";

  }

  export function deal(callback) {

    if (total == 0) {


    } else {

      setGambled(total);
      startEverything();
      return callback(true);
      
    }
    

  }
  

  export function updateBettingAmount(amount) {

    let yourContainer = document.getElementById("amount-to-bet");
    total += amount;
    yourContainer.textContent = total;


}
  
 