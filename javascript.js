function getComputerChoise() {
    let i
    i = Math.floor(Math.random()*3)

    let x
    if (i === 0) {
        x = "rock"
    } else if (i === 1) {
        x = "paper"
    } else {
        x = "seissors"
    }

    return x
}

let computerSelection;
// let playerSelection = 'Rock';

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    
    let winner;

    if (playerSelection == computerSelection) {
        return "It's tie!";
    } else if (playerSelection == "rock") {
        computerSelection == "paper" ? winner = "Computer" : winner = "You";
    } else if (playerSelection == "paper") {
        computerSelection == "seissors" ? winner = "Computer" : winner = "You";
    } else if (playerSelection == "seissors") {
        computerSelection == "rock" ? winner = "Computer" : winner = "You";
    }
    
    let string;

    if (winner == "Computer") {
        string = computerSelection[0].toUpperCase() + computerSelection.substring(1) + " beats " + playerSelection[0].toUpperCase() + playerSelection.substring(1);
        scoreCOunter(winner);
    } else if (winner == "You") {
        string = playerSelection[0].toUpperCase() + playerSelection.substring(1) + " beats " + computerSelection[0].toUpperCase() + computerSelection.substring(1);
        scoreCOunter(winner);
    }

    return winner + " wins! " + string;
}

let result = document.querySelector('.result');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result.textContent = playRound(button.id, getComputerChoise());
    });
});

const finalResult = document.querySelector('.final-result');

const com = document.querySelector('#com');
const you = document.querySelector('#you');

let comScore = 0;
let youScore = 0;

function scoreCOunter(winner) {
    if (winner == "Computer") {
        com.textContent = ++comScore;
    } else if (winner == "You") {
        you.textContent = ++youScore;
    }
    
    if (comScore >= 5) {
        finalResult.textContent = "Computer Win !";
        comScore = 0;
        youScore = 0;
        com.textContent = comScore;
        you.textContent = youScore;
    } else if (youScore >= 5) {
        finalResult.textContent = "You Win !";
        comScore = 0;
        youScore = 0;
        com.textContent = comScore;
        you.textContent = youScore;
    }

    if (comScore + youScore == 1) {
        finalResult.textContent = "";
    }
}