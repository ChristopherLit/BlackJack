import './Modal.jsx';
import { getBank } from './blackjack.jsx';
import { setGambled } from './blackjack.jsx';
import { startEverything } from './blackjack.jsx';
import { setBank } from './blackjack.jsx';


let total = 0; //Make total equal to their betting amount

export function half() {
  let balanceAmount = document.getElementById("balance");
  let yourContainer = document.getElementById("amount-to-bet");
  total = getBank() / 2;
  yourContainer.textContent = total;
  let msg = "Balance: " + (getBank() - total);
  balanceAmount.textContent = msg;

}

    

  export function allIn() {
    let balanceAmount = document.getElementById("balance");
    let yourContainer = document.getElementById("amount-to-bet");
    total = getBank();
    yourContainer.textContent = total;
    let msg = "Balance: " + (getBank() - total);
    balanceAmount.textContent = msg;

  }

  export function clear() {
    let balanceAmount = document.getElementById("balance");
    let yourContainer = document.getElementById("amount-to-bet");
    total = 0;
    yourContainer.textContent = "0";
    let msg = "Balance: " + getBank();
    balanceAmount.textContent = msg;
    

  }

  export function deal(callback) {

    if (total == 0) {


    } else {

      setGambled(total);
      startEverything();
      return callback(true);
      
    }
    

  }

  export function getTotal() {

    return total;

  }
  

  export function updateBettingAmount(amount) {
    let balanceAmount = document.getElementById("balance");
    total += amount;
    let yourContainer = document.getElementById("amount-to-bet");
    yourContainer.textContent = total;
    let msg = "Balance: " + (getBank() - total);
    balanceAmount.textContent = msg;


}
  
 