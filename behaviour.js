function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    console.log("You: " + ps + ", Computer: " + cs);

    if ((ps == "rock" && cs == "scissors") ||
        (ps == "paper" && cs == "rock") ||
        (ps == "scissors" && cs == "paper") ) {
            return "You win!";
    } else if (ps === cs){
        return "Tie!";
    }   else {
        return "You lose!";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        let outcome = playRound(prompt("Rock, Paper or Scissors?"), computerPlay());
        console.log(outcome);
        if (outcome === "You win!") {
            playerWins++;
        } else if (outcome === "You lose!") {
            computerWins++;
        }
        console.log("Score: " + playerWins + " - " + computerWins);
    }
}

game();