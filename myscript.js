function computerPlay() {
    const actions = ["rock", "paper", "scissors"];
    computerSelection = actions[Math.floor(Math.random() * actions.length)]
    return(computerSelection)
}

function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return("You tie!")
    }
    else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        } else {
            return(`You lose! ${playerSelection} loses against ${computerSelection}`)
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        } else {
            return(`You lose! ${playerSelection} loses against ${computerSelection}`)
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        } else {
            return(`You lose! ${playerSelection} loses against ${computerSelection}`)
        }
    }
}

console.log(playRockPaperScissors("rock", computerPlay()))