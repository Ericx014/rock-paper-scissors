const choices = ['rock','paper','scissors'];
let message;
let computerChoice;
let playerChoice;
let gameResult;
let computerPoints=0;
let playerPoints=0;
let rounds=0;
let finalMessage;

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();

    if (computerChoice == 'rock' && playerChoice == 'scissors'){
        message = "You Lose! Rock beats Scissors";
        computerPoints++;
    } 
    else if (computerChoice == 'paper' && playerChoice == 'rock'){
        message = "You Lose! Paper beats Rock";
        computerPoints++;
    }
    else if (computerChoice == 'scissors' && playerChoice == 'paper'){
        message = "You Lose! Scissors beat Paper";
        computerPoints++;
    }
    else if (computerChoice == playerChoice){
        message = "This is a draw!"
    }

    if (playerChoice == 'rock' && computerChoice == 'scissors'){
        message = "You win! Rock beats Scissors";
        playerPoints++;
    } 
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        message = "You win! Paper beats Rock";
        playerPoints++;
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        message = "You win! Scissors beat Paper";
        playerPoints++;
    }

    return message;
}

function game(){
    rounds = prompt("How many rounds would you like to play? ");

    for(let i=0; i<rounds; i++){
        playerChoice = prompt('What is your choice?');
        console.log("You: " + playerChoice);

        computerChoice = getComputerChoice();
        console.log("Computer: " + computerChoice);

        gameResult = play(playerChoice, computerChoice);
        console.log(gameResult);

        console.log("Player : " + playerPoints + " " + "Computer : " + computerPoints)
        console.log(" ");
    }

    if(playerPoints == computerPoints){
        finalMessage = "Its a draw!";
    } 
    else if (playerPoints > computerPoints){
        finalMessage = "Congratulations! You Win!";
    } 
    else if (playerPoints < computerPoints){
        finalMessage = "Too bad! You lose!";
    }

    return finalMessage;
}

console.log(game());