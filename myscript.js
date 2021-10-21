function computerPlay() {
    const actions = ["rock", "paper", "scissors"];
    let action = actions[Math.floor(Math.random() * actions.length)];
    return(action);
}

function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return(`You tie! You both chose ${playerSelection}`);
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

let playerSelection;
let computerSelection;

let round = 0;
let playerPoints = 0;
let computerPoints = 0;
function game() {
    computerSelection = computerPlay();
    playerSelection = window.prompt("Rock, paper or scissors? \n (no seriously the only valid inputs are 'rock' or 'paper' or 'scissors')");

    let inputValidation = playerSelection.toLowerCase() === "rock" || 
    playerSelection.toLowerCase() === "scissors" || 
    playerSelection.toLowerCase() === "paper" || "invalid";

    if (inputValidation === "invalid") {
        console.log(`You have entered ${playerSelection}, which is an invalid input. You will forfeit this round.`)
        computerPoints += 1;
        return;
    }

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

console.log(result);
console.log(`Player ended up with ${playerPoints} wins!`);
console.log(`Computer ended up with ${computerPoints} wins!`)
