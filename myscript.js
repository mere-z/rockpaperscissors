function computerPlay() {
    const actions = ["rock", "paper", "scissors"];
    let action = actions[Math.floor(Math.random() * actions.length)];
    return(action);
}

function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return("You tie!");
    }
    else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            return(`You win! ${playerSelection} beats ${computerSelection}.`);
        } else {
            return(`You lose! ${playerSelection} loses against ${computerSelection}.`);
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            return(`You win! ${playerSelection} beats ${computerSelection}.`);
        } else {
            return(`You lose! ${playerSelection} loses against ${computerSelection}.`);
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return(`You win! ${playerSelection} beats ${computerSelection}.`);
        } else {
            return(`You lose! ${playerSelection} loses against ${computerSelection}.`);
        }
    }
}

let playerSelection = window.prompt("Rock, paper or scissors?");
let computerSelection = computerPlay();

let round = 0;
let playerPoints = 0;
let computerPoints = 0;
function game() {
    console.log(playRockPaperScissors(playerSelection, computerSelection));
    if (playRockPaperScissors(playerSelection, computerSelection).includes("lose")) {

        computerPoints += 1;
        return;
    }
    else if (playRockPaperScissors(playerSelection, computerSelection).includes("win")) {
        playerPoints += 1;
        return;
    }
    else {
        return;
    }
}
while (round < 5) {
    game()
    round += 1;
}

let result;

if (playerPoints > computerPoints) {
    result = "Player wins!"
}
else if (computerPoints > playerPoints) {
    result = "Computer wins!"
}
else {
    result = "Player ties with the computer!"
}

console.log(result)