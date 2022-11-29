console.log("Hello")

function getComputerChoise() {
    let i
    i = Math.floor(Math.random()*3)

    let x
    if (i === 0) {
        x = "Rock"
    } else if (i === 1) {
        x = "Paper"
    } else {
        x = "Seissors"
    }

    return x
}

getComputerChoise()

