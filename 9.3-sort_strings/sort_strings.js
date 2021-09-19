const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const fds = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort();
console.log(foods);

fds.sort(function(a, b){
    if(a < b) { return 1; }
    if(a > b) { return -1; }
    return 0;
})
console.log(fds);

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

const fdsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

foodsWithUpperCase.sort();
console.log(foodsWithUpperCase);

fdsWithUpperCase.sort(function(a, b){
    if(a < b) { return 1; }
    if(a > b) { return -1; }
    return 0;
})
console.log(fdsWithUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
words.sort(function(a, b){
    if(a.length < b.length) { return 1; }
    if(a.length > b.length) { return -1; }
    return 0;
})
console.log(words);
