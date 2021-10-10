let array = []
// let arrayLeague = ['italy', 'italy', 'spain', 'spain', 'germany', 'germany',
//     'france', 'france', 'england', 'england', 'Portugal', 'Portugal']
let arrayLeague = [['italy', false], ['italy', false], ['spain', false], ['spain', false],
['germany', false], ['germany', false], ['france', false], ['france', false],
['england', false], ['england', false], ['portugal', false], ['portugal', false]]

const shuffledArray = arrayLeague.sort((a, b) => 0.5 - Math.random());
// const shuffledArray = arrayLeague

console.log(shuffledArray);

for (let i = 0; i < shuffledArray.length; i++) {
    // let counter = 0
    let pp = document.querySelector('.pp')
    let boardGame = document.querySelector('.board-game')
    // for (let a = 0; a < shuffledArray.length; a++) {
    //     if (shuffledArray[a][1]) {
    //         counter++
    //         console.log('counter++');
    //     }
    //     if (counter == 12) {
    //         pp.innerHTML = 'You Win!'
    //         console.log('winnnn');
    //     }
    // }
    // if(shuffledArray[0][1] && shuffledArray[1][1]&& shuffledArray[2][1]&& shuffledArray[3][1]&& shuffledArray[4][1]
    //     && shuffledArray[5][1]&& shuffledArray[6][1]&& shuffledArray[7][1]&& shuffledArray[8][1]
    //     && shuffledArray[9][1]&& shuffledArray[10][1]&& shuffledArray[11][1]){
    //         console.log('winnnn');
    // }
    document.querySelector(`.btn${i}`).addEventListener('click', () => {
        if(shuffledArray[0][1] && shuffledArray[1][1]&& shuffledArray[2][1]&& shuffledArray[3][1]&& shuffledArray[4][1]
            && shuffledArray[5][1]&& shuffledArray[6][1]&& shuffledArray[7][1]&& shuffledArray[8][1]
            && shuffledArray[9][1]&& shuffledArray[10][1]&& shuffledArray[11][1]){
                console.log('winnnn');
                boardGame.innerHTML = 'You Win!'
        }
        document.querySelector(`.btn${i}`).innerHTML = shuffledArray[i][0]
        array.push(shuffledArray[i][0])
        console.log(array);
        console.log(shuffledArray);
        if (array[0] != array[1] && array[1] != null) {
            setTimeout(() => {
                for (let j = 0; j < shuffledArray.length; j++) {
                    if (!shuffledArray[j][1]) {
                        document.querySelector(`.btn${j}`).innerHTML = ''
                    }
                }
            }, 1000)

            array = []
        }
        if (array[0] == array[1] && array[1] != null) {
            // setTimeout(() => {
            //     for(let i = 0, j = 0; i, j < shuffledArray.length; i++, j++)
            //         document.querySelector(`.btn${i}`).innerHTML = ''
            //     }, 1000)
            for (let s = 0; s < shuffledArray.length; s++) {
                // console.log('ss');
                if (shuffledArray[s][0] == array[0]) {
                    // console.log('sssss');
                    shuffledArray[s][1] = true

                }
            }
            array = []
        }
    })


}

// let counter = 0
// let pp = document.querySelector('.pp')
// for (let a = 0; a < shuffledArray.length; a++) {
//     if (shuffledArray[a][1]) {
//         counter++
//         console.log('counter++');
//     }
//     if(counter == 12){
//         pp.innerHTML = 'You Win!'
//         console.log('winnnn');
//     }
// }