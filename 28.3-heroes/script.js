const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}

const superHeroes = [wonderWoman, batman];

function printName() {
    console.log(`my name is ${this.name}`);
}
function printHeroes(heroes, printFunc) {
    //add your code here
    printFunc.call(heroes)
    // heroes..call(printFunc)
}

new printHeroes(superHeroes,printName)