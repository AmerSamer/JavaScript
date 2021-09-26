const myFirstDiv = document.querySelector("#myFirstDiv");
const mySecondDiv = document.querySelector("#mySecondDiv");
const myThirdDiv = document.querySelector("#myThirdDiv");
const myFourthDiv = document.querySelector("#myFourthDiv");

const all = document.querySelectorAll('div')

let array = Array.from(all)
array.map((el) => {
el.style.background = 'red'
})