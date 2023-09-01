const choices = ['rock','paper','scissors'];
let message;
let computerChoice;
let playerChoice;
let gameResult;
let computerPoints=0;
let playerPoints=0;
let rounds=0;
let finalMessage;
let winner;

// Generate random computer choice
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine winner of game
function play(playerChoice, computerChoice){

    if (
       (computerChoice == 'rock' && playerChoice == 'scissors')||
       (computerChoice == 'paper' && playerChoice == 'rock') ||
       (computerChoice == 'scissors' && playerChoice == 'paper')
    ){
        computerPoints++;
        winner = "computer";
        message = "Computer wins!"
    }
    
    else if (
       (playerChoice == 'rock' && computerChoice == 'scissors')||
       (playerChoice == 'paper' && computerChoice == 'rock') ||
       (playerChoice == 'scissors' && computerChoice == 'paper')
    ){
        playerPoints++;
        winner = "player";
        message = "Player wins!"
    }

    else if (
        playerChoice == computerChoice 
    ) {
        winner = 'tie';
        message = "It's a tie!";
    }

    printScoreMessage(winner, playerChoice, computerChoice);
    updateScoreCount(winner);
    printFinalWinner(playerPoints, computerPoints);
    return message;
}

const rockButton = document.getElementById('rockbtn')
const paperButton = document.getElementById('paperbtn')
const scissorsButton = document.getElementById('scissorsbtn')

rockButton.addEventListener('click', () => handleClick('rock'));
paperButton.addEventListener('click', () => handleClick('paper'));
scissorsButton.addEventListener('click', () => handleClick('scissors'));

const scoreMessage = document.querySelector('.score-message');

function printScoreMessage(winner, playerChoice, computerChoice){
    if (winner == "player"){
        scoreMessage.textContent = `${capitalizeFirstLetter(playerChoice)} beats ${(computerChoice)}!`;
    }

    if (winner == "computer"){
        scoreMessage.textContent = `${capitalizeFirstLetter(computerChoice)} beats ${(playerChoice)}!`;
    }   

    if (winner == 'tie'){
        scoreMessage.textContent = `${capitalizeFirstLetter(computerChoice)} ties with ${(playerChoice)}!`;
    }
}

const computerScore = document.getElementById("computerScore"); 
const playerScore = document.getElementById("playerScore"); 

function updateScoreCount(winner){
    if (winner = 'player'){
        playerScore.textContent = `Player: ${playerPoints}`;
    }

    if (winner = 'computer'){
        computerScore.textContent = `Computer: ${computerPoints}`;
    }

}

const finalWinner = document.querySelector('.finalWinner');

function printFinalWinner(playerPoints, computerPoints){
    if ((playerPoints == 5) || (computerPoints == 5)){

        if (playerPoints >  computerPoints){
            finalWinner.textContent = "PLAYER WINS!";
        }

        if (computerPoints >  playerPoints){
            finalWinner.textContent = "COMPUTER WINS!";
        }
    }

    if ((playerPoints > 5) || (computerPoints > 5)){
        restartGame();
    }
}

function restartGame(){
    scoreMessage.textContent = `Welcome!`;
    playerScore.textContent = `Player: 0`;
    computerScore.textContent = `Computer: 0`;
    finalWinner.textContent = "";
    playerPoints = 0;
    computerPoints = 0;
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function handleClick(playerChoice){
    const computerChoice = getComputerChoice();
    let result = play(playerChoice, computerChoice); 
    console.log(result);
}
