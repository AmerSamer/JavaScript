function percentageOfWorld1(population){
    const pop = 7900000000;
    return (population/pop)*100;
}
// percentageOfWorld1(1441000000);
let china = percentageOfWorld1(1441000000);
console.log(china + '$');  
let spain = percentageOfWorld1(46776422);
console.log(spain + '$');
let italy = percentageOfWorld1(60355544);
console.log(italy + '$');

let percentageOfWorld2 = function (population) {
    const pop = 7900000000;
    return (population/pop)*100;
};
console.log(percentageOfWorld2(1441000000) + '$');
// console.log(percentageOfWorld2(46776422));
// console.log(percentageOfWorld2(60355544));