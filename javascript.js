console.log("Hello")

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

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase()
    
    let winner

    if (playerSelection == computerSelection) {
        return "It's tie!"
    } else if (playerSelection == "rock") {
        computerSelection == "paper" ? winner = "Computer" : winner = "You"
    } else if (playerSelection == "paper") {
        computerSelection == "seissors" ? winner = "Computer" : winner = "You"
    } else if (playerSelection == "seissors") {
        computerSelection == "rock" ? winner = "Computer" : winner = "You"
    }
    
    let string

    if (winner == "Computer") {
        string = computerSelection[0].toUpperCase() + computerSelection.substring(1) + " beats " + playerSelection[0].toUpperCase() + playerSelection.substring(1)
    } else if (winner == "You") {
        string = playerSelection[0].toUpperCase() + playerSelection.substring(1) + " beats " + computerSelection[0].toUpperCase() + computerSelection.substring(1)
    }

    return winner + " wins! " + string

}

const playerSelection = "rock"
const computerSelection = getComputerChoise()
console.log(playRound(playerSelection, computerSelection))