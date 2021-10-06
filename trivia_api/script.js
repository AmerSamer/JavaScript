async function trivia() {
    let array = []
    let arrayDog = []
    let checker = document.querySelector('.checker')
    checker.innerHTML = ''
    let res = await (await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)).json();
    // console.log(res);
    let dog = await (await fetch(`https://dog.ceo/api/breeds/image/random`)).json();
    // console.log(dog);
    let dogg = document.querySelector('.dog')
    dogg.innerHTML = ''
    for (let i = 0; i < 1; i++) {
        let objDog = {
            message: dog.message,
            status: dog.status
        }
        let obj = {
            qNum: i,
            question: res.results[i].question,
            correct_answer: res.results[i].correct_answer,
            category: res.results[i].category,
            incorrect_answers: res.results[i].incorrect_answers,
            answers: (res.results[i].correct_answer + ',' + res.results[i].incorrect_answers).split(','),
        }

        arrayDog.push(objDog)
        console.log(objDog);
        console.log(obj);
        array.push(obj)

        let questions = document.querySelector('.questions')
        questions.innerHTML = array[0].question

        let answers = document.querySelector('.answers')
        let rand = -1;
        let first = -1;
        let second = -1;
        let third = -1;
        let fourth = -1;
        const arrayyy = [0, 1, 2, 3];
        for (let i = 0; i < 4; i++) {
            var randomItem = arrayyy[Math.floor(Math.random() * arrayyy.length)]
            rand = randomItem
            const index = arrayyy.indexOf(randomItem);
            if (index > -1) {
                arrayyy.splice(index, 1);
            }
            if (i == 0) {
                first = rand
                // console.log('first', first);
            }
            if (i == 1) {
                second = rand
                // console.log('second', second);
            }
            if (i == 2) {
                third = rand
                // console.log('third', third);
            }
            if (i == 3) {
                fourth = rand
                // console.log('fourth', fourth);
            }
        }

        let out = ''
        out += '<div class="firstAnswer">' + array[0].answers[first] + '</div>'
        out += '<div class="secondAnswer">' + array[0].answers[second] + '</div>'
        out += '<div class="thirdAnswer">' + array[0].answers[third] + '</div>'
        out += '<div class="fourthAnswer">' + array[0].answers[fourth] + '</div">'
        answers.innerHTML = out

        let Answer1 = document.querySelector('.firstAnswer')
        let Answer2 = document.querySelector('.secondAnswer')
        let Answer3 = document.querySelector('.thirdAnswer')
        let Answer4 = document.querySelector('.fourthAnswer')

        Answer1.addEventListener('click', () => {
            let checker = document.querySelector('.checker')
            let dogg = document.querySelector('.dog')
            if (array[0].answers[first] == array[0].correct_answer) {
                checker.style.color = "white"
                checker.style.background = "green"
                checker.innerHTML = 'True'
                dogg.innerHTML = `<img style="width: 200px; height: 200px;" src='${arrayDog[0].message}'>`
            } else {
                checker.style.color = "white"
                checker.style.background = "red"
                checker.innerHTML = 'False'
                dogg.innerHTML = `<img style="width: 200px; height: 200px;" src='${arrayDog[0].message}'>`
            }
            setTimeout(() => {
                trivia()
            }, 3000);
        })
        Answer2.addEventListener('click', () => {
            let checker = document.querySelector('.checker')
            let dogg = document.querySelector('.dog')
            if (array[0].answers[second] == array[0].correct_answer) {
                checker.style.color = "white"
                checker.style.background = "green"
                checker.innerHTML = 'True'
                dogg.innerHTML = `<img style="width: 200px; height: 200px;" src='${arrayDog[0].message}'>`
            } else {
                checker.style.color = "white"
                checker.style.background = "red"
                checker.innerHTML = 'False'
                dogg.innerHTML = `<img style="width: 200px; height: 200px;" src='${arrayDog[0].message}'>`
            }
            setTimeout(() => {
                trivia()
            }, 3000);
        })
        Answer3.addEventListener('click', () => {
            let checker = document.querySelector('.checker')
            let dogg = document.querySelector('.dog')
            if (array[0].answers[third] == array[0].correct_answer) {
                checker.style.color = "white"
                checker.style.background = "green"
                checker.innerHTML = 'True'
                dogg.innerHTML = `<img style="width: 200px; height: 200px;" src='${arrayDog[0].message}'>`
            } else {
                checker.style.color = "white"
                checker.style.background = "red"
                checker.innerHTML = 'False'
                dogg.innerHTML = `<img style="width: 200px; height: 200px;" src='${arrayDog[0].message}'>`
            }
            setTimeout(() => {
                trivia()
            }, 3000);
        })
        Answer4.addEventListener('click', () => {
            let checker = document.querySelector('.checker')
            let dogg = document.querySelector('.dog')
            if (array[0].answers[fourth] == array[0].correct_answer) {
                checker.style.color = "white"
                checker.style.background = "green"
                checker.innerHTML = 'True'
                dogg.innerHTML = `<img style="width: 200px; height: 200px;" src='${arrayDog[0].message}'>`
            } else {
                checker.style.color = "white"
                checker.style.background = "red"
                checker.innerHTML = 'False'
                dogg.innerHTML = `<img style="width: 200px; height: 200px;" src='${arrayDog[0].message}'>`
            }
            setTimeout(() => {
                trivia()
            }, 3000);
        })
    }
}

trivia()
