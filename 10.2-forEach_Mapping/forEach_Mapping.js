// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.
function doubleValues(arr){
    return arr.map(k => k * 2)
}

console.log(doubleValues([1,2,3,4,5,6]));

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

function onlyEvenValues(arr){
    return arr.filter(k => k % 2 == 0)
}

console.log(onlyEvenValues([1,2,3,4,5,6]));


// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.


