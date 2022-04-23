const choices = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  let randGuess = Math.floor(Math.random() * 3);
  return choices[randGuess];
}

function playRound(playerSelection, computerSelection){
  const outcomes = ["You Win", "You Lose", "It's a Draw"];
  if (playerSelection == "Rock"){
    if (computerSelection == "Rock"){
      return outcomes[2];
    }
    else if (computerSelection == "Paper") {
      return outcomes[1];
    }
    else if (computerSelection == "Scissors") {
      return outcomes[0]
    }
  }
  if (playerSelection == "Paper"){
    if (computerSelection == "Rock"){
      return outcomes[0];
    }
    else if (computerSelection == "Paper") {
      return outcomes[2];
    }
    else if (computerSelection == "Scissors") {
      return outcomes[1]
    }
  }
  if (playerSelection == "Scissors"){
    if (computerSelection == "Rock"){
      return outcomes[1];
    }
    else if (computerSelection == "Paper") {
      return outcomes[0];
    }
    else if (computerSelection == "Scissors") {
      return outcomes[2]
    }
  }
}

const playerSelection = "Rock";

function game(){
  for (let i = 0; i < 5; i++){
    let computerSelection = computerPlay();
    let playerSelection = window.prompt("Choose: Rock, Paper, Scissors");
    console.log(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
