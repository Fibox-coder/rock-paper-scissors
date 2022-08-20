// Player picks 1 out of 3 and computer picks 1 out of 3 (random).
// If choices == equal then return "It's a draw!"
// If choices == player loses = "You Lose! X beats Y"
// If choices == player wins = "You Win! X beats Y"


let choices = [
    "Rock", 
    "Paper", 
    "Scissors"
  ];

// Picks a random item from the array
function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice
}

let playerSelection = "Rock";
let computerSelection = getComputerChoice();

function singleGame(playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        return "It's a Tie!"
    } else if (computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (computerSelection === "Scissors"){
        return "You win! Rock beats scissors"
    } else 
        return "invalid"
}

console.log(singleGame(playerSelection, computerSelection))