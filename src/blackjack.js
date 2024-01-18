var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

var canHit = true;





window.onload = function() {

    buildDeck();
    shuffle();
    startGame()
}

function buildDeck() {

    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["D", "S", "H", "C"];
    deck = [];

    //Creating the deck (unshuffled)
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

    //Dealer stands on 17

    let dealerContainer = document.getElementById("dealer-cards");
    let dealerValueContainer = document.getElementById("dealer-value");
    
  
        let firstCard = deck.pop();
        let img = document.createElement("img");
        img.src = "./src/assets/" + firstCard + ".png";
        dealerSum += findValue(firstCard);
        dealerAceCount += checkAce(firstCard);

        img.style.flex = "0 0 auto";

        dealerContainer.appendChild(img);
        
        dealerValueContainer.textContent = findValue(firstCard);
       
  

    let yourContainer = document.getElementById("your-cards");
    let yourValueContainer = document.getElementById("your-value");

    for (let i = 0; i < 2; i++) {

        let theCard = deck.pop();
        let img = document.createElement("img");
        img.src = "./src/assets/" + theCard + ".png";
        yourSum += findValue(theCard);
        yourAceCount += checkAce(theCard);
    
        img.style.flex = "0 0 auto";
    
        yourContainer.appendChild(img);
        }
        
        yourValueContainer.textContent = yourSum;

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

    let yourContainer = document.getElementById("your-cards");

    let theCard = deck.pop();
    let img = document.createElement("img");
    img.src = "./src/assets/" + theCard + ".png";
    yourSum += findValue(theCard);
    yourAceCount += checkAce(theCard);

    img.style.flex = "0 0 auto";

    yourContainer.appendChild(img);

    if (yourSum > 21) {

        yourSum = reduceAce(yourSum, yourAceCount, true);
    }

    if (reduceAce(yourSum, yourAceCount) > 21) {
        canHit = false;
        console.log("out");
    }

    let yourValueContainer = document.getElementById("your-value");
        yourValueContainer.textContent = yourSum;
}


function stand() {

    canHit = false;

    //Dealer stands on 17

    let dealerContainer = document.getElementById("dealer-cards");
    while (dealerSum < 17) {
        let theCard = deck.pop();
        let img = document.createElement("img");
        img.src = "./src/assets/" + theCard + ".png";
        dealerSum += findValue(theCard);
        dealerAceCount += checkAce(theCard);

        img.style.flex = "0 0 auto";

        dealerContainer.appendChild(img);
        }

        if (dealerSum > 21) {

            dealerSum = reduceAce(dealerSum, dealerAceCount, false);

        }

        console.log(dealerSum);

    document.getElementById("hidden").src = "./src/assets/" + hidden + ".png";

    let dealerValueContainer = document.getElementById("dealer-value");
        dealerValueContainer.textContent = dealerSum;

    //CAN ASSUME YOUR SUM IS 21 AND BELOW

    if (dealerSum > 21) { //You win


    } else if (yourSum < dealerSum) { //Dealer wins


    } else if (yourSum > dealerSum) { //You win


        //Push
    } else {  //Tie



    }



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