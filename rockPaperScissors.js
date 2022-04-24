const choices = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  let randGuess = Math.floor(Math.random() * 3);
  return choices[randGuess];
}


let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection){
  let computerSelection = computerPlay();
  const outcomes = ["You Win", "You Lose", "It's a Draw"];
  if (playerSelection == "Rock"){
    if (computerSelection == "Rock"){
      winnerDisplay.innerHTML = outcomes[2];
    }
    else if (computerSelection == "Paper") {
      winnerDisplay.innerHTML = outcomes[1];
      computerScore++;
    }
    else if (computerSelection == "Scissors") {
      winnerDisplay.innerHTML = outcomes[0];
      playerScore++;
    }
  }
  if (playerSelection == "Paper"){
    if (computerSelection == "Rock"){
      winnerDisplay.innerHTML = outcomes[0];
      playerScore++;
    }
    else if (computerSelection == "Paper") {
      winnerDisplay.innerHTML = outcomes[2];
    }
    else if (computerSelection == "Scissors") {
      winnerDisplay.innerHTML = outcomes[1];
      computerScore++;
    }
  }
  if (playerSelection == "Scissors"){
    if (computerSelection == "Rock"){
      winnerDisplay.innerHTML = outcomes[1];
      computerScore++;
    }
    else if (computerSelection == "Paper") {
      winnerDisplay.innerHTML = outcomes[0];
      playerScore++;
    }
    else if (computerSelection == "Scissors") {
      winnerDisplay.innerHTML = outcomes[2];
    }
  }
  playerScoreDisplay.innerHTML = "Players Score: " + playerScore;
  computerScoreDisplay.innerHTML = "Computers Score: " + computerScore;
}

const winnerDisplay = document.getElementById('Display winner');
const playerScoreDisplay = document.getElementById('Player Score');
const computerScoreDisplay = document.getElementById('Computer Score');

playerScoreDisplay.innerHTML = "Players Score: " + playerScore;
computerScoreDisplay.innerHTML = "Computers Score: " + computerScore;

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', function() {playRound(button.innerHTML)}));



/*function game(){
  for (let i = 0; i < 5; i++){
    let computerSelection = computerPlay();
    let playerSelection = window.prompt("Choose: Rock, Paper, Scissors");
    winnerDisplay.innerHTMLplayerSelection, computerSelection);
    winnerDisplay.innerHTMLplayRound(playerSelection, computerSelection));
  }
}

game();*/
