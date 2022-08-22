const choices = ["rock", "paper","scissors"]
const winners = [];

function game(){
    for(let i = 0; i < 5; i++){
    playRound(i);
    }
    document.querySelector('button').textContent = "Play new game"
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round)
}

function playerChoice(){
    let input = prompt("Type Rock, Paper or Scissors")
    while(input == null) {
        input = prompt("Type Rock, Paper or Scissors")
    }
    input = input.toLocaleLowerCase();
    let check = validateInput(input)
    while (check == false){
        input = prompt("Type Rock, Paper or Scissors, Spelling needs to be exact, but capitalization doesn't matter")
        
        while(input == null) {
            input = prompt("Type Rock, Paper or Scissors")
        }
    
        input = input.toLowerCase()
        check = validateInput(input);
        }
    return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if ((choiceP === "rock" && choiceC === "scissors") ||
               (choiceP === "paper" && choiceC === "rock") ||
               (choiceP === "scissors" && choiceC === "paper")
               ){
        return "Player";
    } else{
        return "Computer"
    }
}

function logWins(){
let playerWins = winners.filter((item) => item == "Player").length;
let computerWins = winners.filter((item) => item == "Computer").length;
let ties = winners.filter((item) => item == "Tie").length;
console.log("Results:");
console.log("Player Wins:", playerWins);
console.log("Computer Wins:", computerWins);
console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round', round)
    console.log("Player Chose", playerChoice)
    console.log("Computer Chose", computerChoice)
    console.log(winner, "Won the round!")
    console.log('---------------------------------')
}




// OLD CODE

// Player picks 1 out of 3 and computer picks 1 out of 3 (random).
// If choices == equal then return "It's a draw!"
// If choices == player loses = "You Lose! X beats Y"
// If choices == player wins = "You Win! X beats Y"


// let choices = [
//     "rock", 
//     "paper", 
//     "scissors"
//   ];

// // Picks a random item from the array
// function getComputerChoice() {
//     let randomChoice = choices[Math.floor(Math.random()*choices.length)];
//     return randomChoice
// }

// let playerSelection = "Rock";
// playerSelection = playerSelection.toLowerCase();
// let computerSelection = getComputerChoice();
// let playerScore = 0
// let computerScore = 0

// // Plays a single game of rock paper scissors
// function playRound(playerSelection, computerSelection){

//     if (computerSelection === playerSelection){ 
//         playerScore++ 
//         computerScore++

//     } else if (computerSelection === "paper" && playerSelection === "rock") {
//         return computerScore++ //"You Lose! Paper beats Rock"
//     } else if (computerSelection === "rock" && playerSelection === "scissors") {
//         return computerScore++ //"You Lose! Rock beats Scissors"
//     } else if (computerSelection === "scissors" && playerSelection === "paper") {
//         return computerScore++ //"You Lose! Scissors beats Paper"

//     } else if (computerSelection === "rock" && playerSelection === "paper") {
//         return playerScore++ //"You win! Paper beats Rock"
//     } else if (computerSelection === "scissors" && playerSelection === "rock"){
//         return playerScore++ //"You win! Rock beats Scissors"
//     } else if (computerSelection === "paper" && playerSelection === "scissors") {
//         return playerScore++ //"You win! Scissors beats Paper"

//     } else 
//         return "invalid"
// }
// playRound(playerSelection, computerSelection)
// console.log(playerScore)
// console.log(computerScore)

// function game() {
//     for (let i = 0; i < 5; i++)
// }


// console.log(game())

// function winner(){
// if (playerScore > computerScore){
//     return "You win!"
// } else if (playerScore < computerScore) {
//     return "You lose!"
// } else 
// return "It's a Tie!"
// }
// console.log(winner())