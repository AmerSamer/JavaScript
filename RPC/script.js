let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let boardGame = document.querySelector('.board-game')
let ComputerGame = document.querySelector('.computerChoose')
let result = document.querySelector('.result')
let total = document.querySelector('.total')
let end = document.querySelector('.end')
let playerScore = 0
let computerScore = 0
let tieScore = 0
let i = 0
let arrayComputer = ['rock', 'paper', 'scissors']

////////////////////////////////////////////////////////////////////////////////////////////

rock.addEventListener('click', outputPlayer)
paper.addEventListener('click', outputPlayer1)
scissors.addEventListener('click', outputPlayer2)

function outputPlayer() {
    boardGame.innerHTML = 'rock'
    return outputComputer('rock')
}
function outputPlayer1() {
    boardGame.innerHTML = 'paper'
    return outputComputer('paper')
}
function outputPlayer2() {
    boardGame.innerHTML = 'scissors'
    return outputComputer('scissors')
}
function outputComputer(outputPlayer) {
    const shuffledArrayComputer = arrayComputer.sort((a, b) => 0.5 - Math.random());
    ComputerGame.innerHTML = shuffledArrayComputer[0]
    return score(outputPlayer, shuffledArrayComputer[0])
}
function score(outputPlayer, outputComputer) {
    if (outputPlayer == 'rock' && outputComputer == 'rock' ||
        outputPlayer == 'paper' && outputComputer == 'paper' ||
        outputPlayer == 'scissors' && outputComputer == 'scissors') {
        i++
        result.innerHTML = `Tie Round ${i}`
        tieScore++
        total.innerHTML = `Player: ${playerScore} Tie: ${tieScore}, Computer: ${computerScore}`
    } else if (outputPlayer == 'rock' && outputComputer == 'paper' ||
        outputPlayer == 'scissors' && outputComputer == 'rock' ||
        outputPlayer == 'paper' && outputComputer == 'scissors') {
        i++
        result.innerHTML = `Computer win Round ${i}`
        computerScore++
        total.innerHTML = `Player: ${playerScore} Tie: ${tieScore}, Computer: ${computerScore}`
    }
    else if (outputComputer == 'rock' && outputPlayer == 'paper' ||
        outputComputer == 'scissors' && outputPlayer == 'rock' ||
        outputComputer == 'paper' && outputPlayer == 'scissors') {
        i++
        result.innerHTML = `Player win Round ${i}`
        playerScore++
        total.innerHTML = `Player: ${playerScore} Tie: ${tieScore}, Computer: ${computerScore}`
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

total.innerHTML = `Player: ${playerScore} Tie: ${tieScore}, Computer: ${computerScore}`

end.addEventListener('click', () => {
    location.reload();
})