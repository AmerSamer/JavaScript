// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.

function isString (str,callbackFunc){
    if(typeof str === 'string'){
       return callbackFunc(str)
    }
}
function callbackFunc(string){
    console.log(string);
}

// isString('Joe', callbackFunc)

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

function firstWordUpperCase (str,callbackFunction){
    str[0] = str[0].toUpperCase()
    console.log(str);
    callbackFunction(str)
}

function callbackFunction(string){
    string = string.replace(/\s+/g, '-');
    console.log(string);

}

firstWordUpperCase ('samer',callbackFunction)