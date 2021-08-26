// paper => 0
// scissors => 1
// rock => 2

// paper vs scissors => scissors; 0 - 1 = -1, 1 - 0 = 1
// scissors vs rock => rock; 1 - 2 = -1, 2 - 1 = 1
// paper vs rock => paper; 0 - 2 = -2, 2 - 0 = 2


const RPS = ["paper", "scissors", "rock"]; 
const WHOBEATSWHO = ["Scissors beats paper", "Paper beats rock", "Rock beats scissors"];

function computerPlay() {
    return Math.floor(Math.random()*3)
}

function calcWinner(playerSelection, computerSelection) {

    let flipRes = 1;

   if ((playerSelection + computerSelection) % 2 == 0) {
        flipRes = -0.5;
    }

    return (playerSelection - computerSelection)*flipRes;

}
;
function selectionToNum(selection) {
    for (let i=0; i < 3; i++) {
        if (RPS[i].toLowerCase() == selection.toLowerCase()) {
            return i;
        }
    }
}

function getResultString(sumOfSelection, res) {
    return `You ${res < 0 ? "lose" : "win"}! ${WHOBEATSWHO[sumOfSelection - 1]}!\n`
}

function playRound(playerSelection) {
    let playerSelectionNum = selectionToNum(playerSelection);
    console.log("SCISSORS, PAPER, ROCK!\n");
    let computerSelectionNum = computerPlay();
    console.log(`Player: ${RPS[playerSelectionNum]} | Computer: ${RPS[computerSelectionNum]}\n`);
    let res = calcWinner(playerSelectionNum, computerSelectionNum);
    if (res == 0) {
        console.log("It was a tie.\n"); 
    }
    else {
        console.log(getResultString(playerSelectionNum+computerSelectionNum, res));
    }
    return res
}

function playGame() {
    let score = 0
    let playerSelection = prompt("Choose your fighter!?", "Rock/Paper/Scissors");
    while (selectionToNum(playerSelection) == undefined) {
        playerSelection = prompt("Thats not a fighter! Try again!", "Rock/Paper/Scissors");
    }
    for (let i = 0; i < 5; i++) {
        score += playRound(playerSelection);
    }
    console.log(`At the end of 5 rounds you ${score < 0 ? "lost" : "won"}!`)
}

playGame();

