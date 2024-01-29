var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

var canHit = true;

let bank = -1;
let gambled = 0;

let addYour;
let addDealer;
let swapBack;

export function startEverything() {
    buildDeck();
    shuffle();
    startGame();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["D", "S", "H", "C"];
    deck = [];

    // Creating the deck (unshuffled)
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
}

function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

function startGame() {
    hidden = deck.pop();
    dealerSum += findValue(hidden);
    dealerAceCount += checkAce(hidden);

    addDealer('./src/assets/BACK.png');
        

    // Dealer stands on 17
    let dealerValueContainer = document.getElementById("dealer-value");

    setTimeout(() => {
    let firstCard = deck.pop();
    let imageSrc = `./src/assets/${firstCard}.png`;
    dealerSum += findValue(firstCard);
    dealerAceCount += checkAce(firstCard);

    addDealer(imageSrc);

    dealerValueContainer.textContent = findValue(firstCard);
}, 1);

    


    let yourValueContainer = document.getElementById("your-value");

    
        let theCard = deck.pop();
        let imageSrc = `./src/assets/${theCard}.png`;
        yourSum += findValue(theCard);
        yourAceCount += checkAce(theCard);
        

        console.log(imageSrc);

        
            addYour(imageSrc);
        
            setTimeout(() => {

                theCard = deck.pop();
                imageSrc = `./src/assets/${theCard}.png`;
                yourSum += findValue(theCard);
               yourAceCount += checkAce(theCard);
       
               console.log(imageSrc);

               addYour(imageSrc);
                
              }, 1);
          

        
      
    
              setTimeout(() => {
    yourValueContainer.textContent = yourSum;

}, 2);

    if (yourSum > 21) {
        yourSum = reduceAce(yourSum, yourAceCount, true);
    }

    document.getElementById("Hit").addEventListener("click", hit);
    document.getElementById("Stand").addEventListener("click", stand);


}

function findValue(card) {
    let data = card.split("-");
    let value = data[0];

    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        } else {
            return 10;
        }
    }

    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }

    return 0;
}

function hit() {
    if (canHit === false) {
        return;
    }

    let theCard = deck.pop();
    let imageSrc = `./src/assets/${theCard}.png`;
    yourSum += findValue(theCard);
    yourAceCount += checkAce(theCard);

    addYour(imageSrc);

    if (yourSum > 21) {
        yourSum = reduceAce(yourSum, yourAceCount, true);
    }

    if (reduceAce(yourSum, yourAceCount) >= 21) {
        canHit = false;
        console.log("out");
    }

    let yourValueContainer = document.getElementById("your-value");
    yourValueContainer.textContent = yourSum;
}

function stand() {
    canHit = false;

    setTimeout(() => {
        swapBack('./src/assets/BACK.png', `./src/assets/${hidden}.png`);
    }, 1);
    

    // Dealer stands on 17
    while (dealerSum < 17) {
       
        let theCard = deck.pop();
        let imageSrc = `./src/assets/${theCard}.png`;
        dealerSum += findValue(theCard);
        dealerAceCount += checkAce(theCard);

        addDealer(imageSrc);
   
    }

    if (dealerSum > 21) {
        dealerSum = reduceAce(dealerSum, dealerAceCount, false);
    }

    

    let dealerValueContainer = document.getElementById("dealer-value");
    dealerValueContainer.textContent = dealerSum;

    // CAN ASSUME YOUR SUM IS 21 AND BELOW
    if (dealerSum > 21) {
        // You win
        bank += gambled * 2;
    } else if (yourSum < dealerSum) {
        // Dealer wins
        bank = bank - gambled;
    } else if (yourSum > dealerSum) {
        // You win
        bank += gambled * 2;
        // Push
    } else {
        // Tie
    }

    gambled = 0;
}

function reduceAce(sum, aceCount, isYou) {
    while (sum > 21 && aceCount > 0) {
        sum = sum - 10;
        aceCount = aceCount - 1;

        if (isYou == true) {
            yourAceCount = aceCount;
        } else {
            dealerAceCount = aceCount;
        }
    }

    return sum;
}

export function getBank() {
    if (bank == -1) {
        bank = 500;
    }

    return bank;
}

export function setGambled(val) {
    gambled = val;
}

export const AnotherFileFunctionYour = (addDivtoYourContainer) => {

    addYour = addDivtoYourContainer;

  };

  export const AnotherFileFunctionDealer = (addDivtoDealerContainer, replaceImageFunc) => {
    
    addDealer = addDivtoDealerContainer;
    swapBack = replaceImageFunc;

  };