let message ='';
let cards = [];
//winning status
let hasBlackjack = false;
let sum = 0;
//player status
let isAlive = false;
let messageEl = document.getElementById('messageEl');
//using querySelector insted of getElement, uses # to make it be determined as an ID and for classes a dot
let sumEl = document.querySelector('#sum');
// displaying cards
let cardsEl = document.querySelector('#cards');
//creating player object for chips and name display
let player ={
    //variable syntax on objects
    name: "Joes",
    chips: 500
}
//changing player chips display element 
let playerEl = document.getElementById("playerEl");
playerEl.textContent = player.name + ": $" + player.chips;
// calling function on another function 
function startGame(){
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    hasBlackjack=false;
    renderGame();
}

//adding winning/losing conditions
function renderGame(){
    cardsEl.textContent = "Cards: ";
    sum=0;
    for(let i=0; i<cards.length; i++){
      console.log(cards[i]);
      cardsEl.textContent += cards[i]+ " ";
      sum += cards[i];
    }
    sumEl.textContent = "Sum: "+ sum;
    if (sum<=20){
         message = "Do you want to draw a new card?";
    }else if(sum===21){
        message = "Nice, You've got Blackjack";
        hasBlackjack = true;
        player.chips += 200;
        playerEl.textContent = player.name + ": $" + player.chips;
    }else{
         message = "You're out of the game";
         isAlive = false;
         player.chips -= 150;
         playerEl.textContent = player.name + ": $" + player.chips;
    }
    messageEl.textContent = message;
}
//new card functionality
function newCard(){
if (isAlive==true && hasBlackjack==false){
   let newCard = randomCard();
   cards.push(newCard);
   renderGame();
}
}

//random number generation
function randomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1;
    if (randomCard == 1){
        randomCard = 11;
    }else if (randomCard >10){
        randomCard = 10;
    }
    return randomCard;

}