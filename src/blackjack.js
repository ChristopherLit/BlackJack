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
    while (dealerSum < 17) {
        let theCard = deck.pop();
        let img = document.createElement("img");
        img.src = "./public/" + theCard + ".png";
        dealerSum += findValue(theCard);
        dealerAceCount += checkAce(theCard);

        img.style.left = dealerContainer.children.length * 140 + "px";

        dealerContainer.appendChild(img);
        }


    console.log(dealerSum);

    let yourContainer = document.getElementById("your-cards");
for (let i = 0; i < 2; i++) {
    let theCard = deck.pop();
    let img = document.createElement("img");
    img.src = "./public/" + theCard + ".png";
    yourSum += findValue(theCard);
    yourAceCount += checkAce(theCard);

    // Set left property for each new card
    img.style.left = yourContainer.children.length * 130 + "px";

    yourContainer.appendChild(img);
}


    console.log(yourSum);

    
  




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