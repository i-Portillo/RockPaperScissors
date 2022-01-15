function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    let outcome = "";

    outcome += "You: " + ps + ", Computer: " + cs + "\n";

    if ((ps == "rock" && cs == "scissors") ||
        (ps == "paper" && cs == "rock") ||
        (ps == "scissors" && cs == "paper") ) {
            outcome += "You win!";
    } else if (ps === cs){
        outcome += "Tie!";
    }   else {
        outcome += "You lose!";
    }

    return outcome;
}

function game() {
    const numberOfWins = 5;

    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < numberOfWins && computerWins < numberOfWins) {
        let outcome = playRound("Paper", computerPlay());
        console.log(outcome);
        if (outcome === "You win!") {
            playerWins++;
        } else if (outcome === "You lose!") {
            computerWins++;
        }
        console.log("Score: " + playerWins + " - " + computerWins);
    }
}

const buttons = document.querySelectorAll('button');
const scoreboard = document.querySelector('.scoreboard');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const newLine = document.createElement('p');
        newLine.textContent = playRound(button.textContent, computerPlay());
        scoreboard.appendChild(newLine);
        scoreboard.scrollTop = scoreboard.scrollHeight;
    });    
});