const people = ["Greg", "Mary", "Devon", "James"];
const peopleArr = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all of the people.
function printAll(people){
    people.forEach(element => {
        console.log(element);

    });
}
printAll(people);
// 2. Write the command to remove "Greg" from the array.
function removeGreg(people){
    const index = people.indexOf("Greg");
    if (index > -1) {
        people.splice(index, 1);
    }
    console.log(people); 
}
removeGreg(people);
// 3. Write the command to remove "James" from the array.
function removeJames(people){
    const index = people.indexOf("James");
    if (index > -1) {
        people.splice(index, 1);
    }
    console.log(people); 
}
removeJames(people);
// 4. Write the command to add "Matt" to the front of the array.
function addMatt(people){
    people.unshift('Matt');
    console.log(people);
}
addMatt(people);

// 5. Write the command to add your name to the end of the array.
function addMyName(people){
    people.push('Samer');
    console.log(people);
}
addMyName(people);

// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
function s(people){
    console.log(people.slice(2));
}
s(people);

// 8. Write the command that gives the indexOf where "Mary" is located.
function maryIndexOf(people){
    console.log(people.indexOf("Mary"));
}
maryIndexOf(people);
// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
function fooIndexOf(people){
    console.log(people.indexOf("Foo"));
}
fooIndexOf(people);

// 10. Redefine the people variable with the value you started with. 
// Using the splice command, remove "Devon" from the array and add "Elizabeth"
// const people = ["Greg", "Mary", "Devon", "James"];
// and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
function spliceRemoveAdd(peopleArr){
    console.log(peopleArr.splice(2, 1, "Elizabeth", "Artie"));
}
spliceRemoveAdd(peopleArr);
// 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
function withbob(peopleArr){
    let withBob = peopleArr.slice() + 'Bob' ;

    console.log({withBob});
} 
withbob(peopleArr);