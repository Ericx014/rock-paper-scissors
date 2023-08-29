const choices = ['rock','paper','scissors'];
let message;
let computerChoice;
let playerChoice;
let gameResult;
let computerPoints=0;
let playerPoints=0;

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();

    if (computerChoice == 'rock' && playerChoice == 'scissors'){
        message = "You Lose! Rock beats Scissors";
    } 
    else if (computerChoice == 'paper' && playerChoice == 'rock'){
        message = "You Lose! Paper beats Rock";
    }
    else if (computerChoice == 'scissors' && playerChoice == 'paper'){
        message = "You Lose! Scissors beat Paper";
    }
    else if (computerChoice == playerChoice){
        message = "This is a draw!"
    }

    if (playerChoice == 'rock' && computerChoice == 'scissors'){
        message = "You win! Rock beats Scissors";
    } 
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        message = "You win! Paper beats Rock";
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        message = "You win! Scissors beat Paper";
    }

    return message;
}

function game(){
    for(let i=1; i<=1; i++){
        playerChoice = prompt('What is your choice?');
        console.log("You: " + playerChoice);

        computerChoice = getComputerChoice();
        console.log("Computer: " + computerChoice);

        gameResult = play(playerChoice, computerChoice);
        console.log(gameResult);
    }
}

game();