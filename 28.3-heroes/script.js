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
    for(let i = 0 ; i < heroes.length ; i++){
        printFunc.apply(heroes[i])
    }
    
    // heroes.forEach(element => {
    //     printFunc.apply(element)
    // });

    // heroes.map(ele => printFunc.apply(ele));
}

printHeroes(superHeroes,printName)