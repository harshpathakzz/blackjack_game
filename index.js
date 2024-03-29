let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let gameOver = document.getElementById("gameover");
function getRandomCard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}
function startGame() {
  isAlive = true;
  console.log("clicked");
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  gameOver.textContent = "NEW CARD";
  gameOver.disabled = false;
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    gameOver.textContent = "YOU WON";
    gameOver.disabled = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    gameOver.textContent = "GAME OVER";
    gameOver.disabled = true;
  }
  messageEl.textContent = message;
}
function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
