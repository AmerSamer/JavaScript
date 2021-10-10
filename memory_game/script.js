let array = []
let arrayWrong = []
// let arrayLeague = ['italy', 'italy', 'spain', 'spain', 'germany', 'germany',
//     'france', 'france', 'england', 'england', 'Portugal', 'Portugal']
let arrayLeague = [['italy', false], ['italy', false], ['spain', false], ['spain', false],
['germany', false], ['germany', false], ['france', false], ['france', false],
['england', false], ['england', false], ['portugal', false], ['portugal', false]]

// const shuffledArray = arrayLeague.sort((a, b) => 0.5 - Math.random());
const shuffledArray = arrayLeague
let WrongCounter = 0
console.log(shuffledArray);
let restart = document.querySelector('.restart')
// let output = ``
for (let i = 0; i < shuffledArray.length; i++) {

    let foter = document.querySelector('.foter')
    let boardGame = document.querySelector('.board-game')
    // for(let q = 0 ; q < arrayWrong.length ; q++){
    //     console.log(arrayWrong[q]);
    // }

    document.querySelector(`.btn${i}`).addEventListener('click', () => {
        if (shuffledArray[0][1] && shuffledArray[1][1] && shuffledArray[2][1] && shuffledArray[3][1] && shuffledArray[4][1]
            && shuffledArray[5][1] && shuffledArray[6][1] && shuffledArray[7][1] && shuffledArray[8][1]
            && shuffledArray[9][1] && shuffledArray[10][1] && shuffledArray[11][1]) {
            console.log('winnnn');
            // arrayWrong.push(WrongCounter)
            // console.log(arrayWrong[0]);
            // boardGame.innerHTML = 'You Win!'
            boardGame.innerHTML = `You Win! <input type="button" class="newGame" value="New Game">`
            let newGame = document.querySelector('.newGame')
            newGame.addEventListener('click', () => {
                location.reload();
            })
        }
        document.querySelector(`.btn${i}`).innerHTML = shuffledArray[i][0]
        array.push(shuffledArray[i][0])
        console.log(array);
        console.log(shuffledArray);
        if (array[0] != array[1] && array[1] != null) {
            setTimeout(() => {
                WrongCounter++
                foter.innerHTML = `Wrong Guesses: ${WrongCounter}`
                for (let j = 0; j < shuffledArray.length; j++) {
                    if (!shuffledArray[j][1]) {
                        document.querySelector(`.btn${j}`).innerHTML = ''
                    }
                }
            }, 1000)

            array = []
        }
        if (array[0] == array[1] && array[1] != null) {
            for (let s = 0; s < shuffledArray.length; s++) {
                if (shuffledArray[s][0] == array[0]) {
                    shuffledArray[s][1] = true
                }
            }
            array = []
        }
    })
}
// let kk = document.querySelector('.newGame')
// kk.addEventListener('click', () => {
//     location.reload();
// })

restart.addEventListener('click', () => {
    location.reload();
})