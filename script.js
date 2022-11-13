function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choiceNumber = getRandomNumber(3);
    return choices[choiceNumber];


}

function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You tied!";

    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose, paper covers rock.";
        }
        else if (computerSelection === "scissors") {
            return "You win! Rock breaks scissors.";
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper covers rock.";
        }
        else if (computerSelection === "scissors") {
            return "You lose, scissors cut paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors cut paper";
        }
        else if (computerSelection === "rock") {
            return "You lose, rock breaks scissors.";
        }
    }

}

function getPlayerChoice() {
    let playerSelection = prompt("Please enter rock, paper, or scissors");
    playerSelection = playerSelection.toLowerCase();
    let choices = ["rock", "paper", "scissors"];
    while (!choices.includes(playerSelection)) {
        playerSelection = prompt("It seems you mistyped, please try again");
        playerSelection = playerSelection.toLowerCase();
    }
    return playerSelection;
}

function scoreRound(result) {
    let playerScore = 0;
    let computerScore = 0;
    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }
    console.log(result);
    console.log(`Player Score: ${playerScore}, Computer Score ${computerScore}`);
    return [playerScore, computerScore];
}

function game(n) {
    var scores;
    for (let i = 0; i < n; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        scores = scoreRound(result);
    }
    while (scores[0] === scores[1]) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        scores = scoreRound(result);
    }

    return (scores[0] > scores[1]) ? "Player wins" : "Computer wins";

}
console.log(game(5));