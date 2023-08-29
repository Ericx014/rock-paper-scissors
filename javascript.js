const choices = ['Rock','Paper','Scissors'];
let message;
let computerChoice;
let playerChoice;

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(playerChoice, computerChoice){
    playerChoice = playerChoice.toLower();

    if (computerChoice == 'rock' && playerChoice == 'scissors'){
        message = "You Lose! Rock beats Scissors";
    } 
    else if (computerChoice == 'paper' && playerChoice == 'rock'){
        message = "You Lose! Paper beats Rock";
    }
    else if (computerChoice == 'scissors' && playerChoice == 'paper'){
        message = "You Lose! Scissors beat Paper";
    }
}

computerChoice = getComputerChoice();
console.log(computerChoice);