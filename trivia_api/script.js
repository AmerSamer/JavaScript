async function trivia() {
    let array = []
    let arrayDog = []
    let checker = document.querySelector('.checker')
    checker.innerHTML = ''
    let res = await (await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)).json();
    console.log(res);
    let dog = await (await fetch(`https://dog.ceo/api/breeds/image/random`)).json();
    console.log(dog);
    let dogg = document.querySelector('.dog')
    dogg.innerHTML = ''
    for (let i = 0; i < 1; i++) {
        // let res = await (await fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)).json()
        // console.log(res);
        // let res = await (await fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)).json()
        // let resPlanet = await (await fetch(`https://swapi.dev/api/planets/${i}/`)).json()
        // console.log(res);
        let objDog={
            message: dog.message,
            status: dog.status
        }
        // console.log(dog.message);
        let obj = {
            qNum: i,
            question: res.results[i].question,
            correct_answer: res.results[i].correct_answer,
            category: res.results[i].category,
            incorrect_answers: res.results[i].incorrect_answers,
            answers: (res.results[i].correct_answer + ',' + res.results[i].incorrect_answers).split(','),
        }
        
        arrayDog.push(objDog)
        console.log(arrayDog[0].message);
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
            // console.log(arrayyy);
            rand = randomItem
            const index = arrayyy.indexOf(randomItem);
            if (index > -1) {
                arrayyy.splice(index, 1);
            }
            if (i == 0) {
                first = rand
                console.log('first', first);
            }
            if (i == 1) {
                second = rand
                console.log('second', second);
            }
            if (i == 2) {
                third = rand
                console.log('third', third);
            }
            if (i == 3) {
                fourth = rand
                console.log('fourth', fourth);
            }
        }
        // console.log(third);

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

        // console.log(trueAnswer);
        Answer1.addEventListener('click', () => {
            let checker = document.querySelector('.checker')
            let dogg = document.querySelector('.dog')
            if (array[0].answers[first] == array[0].correct_answer) {
                checker.style.color = "white"
                checker.style.background= "green"
                checker.innerHTML = 'True'
                dogg.innerHTML=  `<img style="width: 100px; height: 100px;" src='${arrayDog[0].message}'>`
                console.log('succ');
            } else {
                checker.style.color = "white"
                checker.style.background = "red"
                checker.innerHTML = 'False'
                dogg.innerHTML= `<img style="width: 100px; height: 100px;" src='${arrayDog[0].message}'>`
                console.log('fail');
            }
            // checker.innerHTML = ''
            setTimeout(()=>{ 
                trivia() 
            }, 3000);
            // trivia()
        })
        Answer2.addEventListener('click', () => {
            let checker = document.querySelector('.checker')
            let dogg = document.querySelector('.dog')
            if (array[0].answers[second] == array[0].correct_answer) {
                checker.style.color = "white"
                checker.style.background= "green"
                checker.innerHTML = 'True'
                dogg.innerHTML=  `<img style="width: 100px; height: 100px;" src='${arrayDog[0].message}'>`

            } else {
                checker.style.color = "white"
                checker.style.background = "red"
                checker.innerHTML = 'False'
                dogg.innerHTML=  `<img style="width: 100px; height: 100px;" src='${arrayDog[0].message}'>`

            }
            setTimeout(()=>{ 
                trivia() 
            }, 3000);
        })
        Answer3.addEventListener('click', () => {
            let checker = document.querySelector('.checker')
            let dogg = document.querySelector('.dog')
            if (array[0].answers[third] == array[0].correct_answer) {
                checker.style.color = "white"
                checker.style.background= "green"
                checker.innerHTML = 'True'
                dogg.innerHTML=  `<img style="width: 100px; height: 100px;" src='${arrayDog[0].message}'>`

            } else {
                checker.style.color = "white"
                checker.style.background = "red"
                checker.innerHTML = 'False'
                dogg.innerHTML=  `<img style="width: 100px; height: 100px;" src='${arrayDog[0].message}'>`

            }
            setTimeout(()=>{ 
                trivia() 
            }, 3000);
        })
        Answer4.addEventListener('click', () => {
            let checker = document.querySelector('.checker')
            let dogg = document.querySelector('.dog')
            if (array[0].answers[fourth] == array[0].correct_answer) {
                checker.style.color = "white"
                checker.style.background= "green"
                checker.innerHTML = 'True'
                dogg.innerHTML=  `<img style="width: 100px; height: 100px;" src='${arrayDog[0].message}'>`

            } else {
                checker.style.color = "white"
                checker.style.background = "red"
                checker.innerHTML = 'False'
                dogg.innerHTML=  `<img style="width: 100px; height: 100px;" src='${arrayDog[0].message}'>`

            }
            setTimeout(()=>{ 
                trivia() 
            }, 3000);
        })
    }
}

trivia()





// window.onload = function () {

//     var questionArea = document.getElementsByClassName('questions')[0],
//         answerArea   = document.getElementsByClassName('answers')[0],
//         checker      = document.getElementsByClassName('checker')[0],
//         current      = 0,

//        // An object that holds all the questions + possible answers.
//        // In the array --> last digit gives the right answer position
//         allQuestions = {
//           'What is Canada\'s national animal?' : ['Beaver', 'Duck', 'Horse', 0],

//           'What is converted into alcohol during brewing?' : ['Grain', 'Sugar' , 'Water', 1],

//           'In what year was Prince Andrew born? ' : ['1955', '1960', '1970', 1]
//         };

//     function loadQuestion(curr) {
//     // This function loads all the question into the questionArea
//     // It grabs the current question based on the 'current'-variable

//       var question = Object.keys(allQuestions)[curr];

//       questionArea.innerHTML = '';
//       questionArea.innerHTML = question;    
//     }

//     function loadAnswers(curr) {
//     // This function loads all the possible answers of the given question
//     // It grabs the needed answer-array with the help of the current-variable
//     // Every answer is added with an 'onclick'-function

//       var answers = allQuestions[Object.keys(allQuestions)[curr]];

//       answerArea.innerHTML = '';

//       for (var i = 0; i < answers.length -1; i += 1) {
//         var createDiv = document.createElement('div'),
//             text = document.createTextNode(answers[i]);

//         createDiv.appendChild(text);      
//         createDiv.addEventListener("click", checkAnswer(i, answers));


//         answerArea.appendChild(createDiv);
//       }
//     }

//     function checkAnswer(i, arr) {
//       // This is the function that will run, when clicked on one of the answers
//       // Check if givenAnswer is sams as the correct one
//       // After this, check if it's the last question:
//       // If it is: empty the answerArea and let them know it's done.

//       return function () {
//         var givenAnswer = i,
//             correctAnswer = arr[arr.length-1];

//         if (givenAnswer === correctAnswer) {
//           addChecker(true);             
//         } else {
//           addChecker(false);                        
//         }

//         if (current < Object.keys(allQuestions).length -1) {
//           current += 1;

//           loadQuestion(current);
//           loadAnswers(current);
//         } else {
//           questionArea.innerHTML = 'Done';
//           answerArea.innerHTML = '';
//         }

//       };
//     }

//     function addChecker(bool) {
//     // This function adds a div element to the page
//     // Used to see if it was correct or false

//       var createDiv = document.createElement('div'),
//           txt       = document.createTextNode(current + 1);

//       createDiv.appendChild(txt);

//       if (bool) {

//         createDiv.className += 'correct';
//         checker.appendChild(createDiv);
//       } else {
//         createDiv.className += 'false';
//         checker.appendChild(createDiv);
//       }
//     }


//     // Start the quiz right away
//     loadQuestion(current);
//     loadAnswers(current);

//   };