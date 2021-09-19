// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.

function isString (str,callbackFunc){
    if(typeof str === 'string'){
       callbackFunc(str)
    }
}
function callback(string){
    console.log(string);
}

isString('Joe', callback)

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

function firstWordUpperCase (str,callbackFunction){
    str = (str.split(' ')[0].toUpperCase()) + ' ' + (str.split(' ').slice(1).join(' '))
    console.log(callbackFunction(str));
    
}

const cbf = str=>str.split(' ').join('-')

firstWordUpperCase ('Rachel Leonard Green',cbf)