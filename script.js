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


const resultDisplay = document.querySelector("#resultDisplay");
const scoreDisplay = document.querySelector("#scoreDisplay");
const who = document.querySelector("#who");
const playAgain = document.querySelector("#playAgain");
const modal = document.querySelector(".modal");

let scores;



const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        resultDisplay.innerHTML = result;
        scoreDisplay.innerHTML = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        if (playerScore === 5 || computerScore === 5) {
            modal.style.display = 'flex';
            who.innerHTML = (playerScore > computerScore) ? "Player" : "Computer";
        }

    })
})

playAgain.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    resultDisplay.innerHTML = '';
    scoreDisplay.innerHTML = '';
    modal.style.display = "none";
})