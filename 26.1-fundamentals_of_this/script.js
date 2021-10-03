// Question 1:
// In your own words what will this point to and why?(Note this is the global scope)
// Answer --- 'this' point to window in this case, and it returns like global
console.log(this);

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// Answer --- 'this' point to myObj.greet method and its equal to empty/null string
// the fixed code --- we should add 'function' word before the '()'. in this case 'this' will be return to 'myObj' 
const myObj = {
    name: "Timmy",
    greet: function(){
        console.log(`Hello ${this.name}`);
    },
}; 
myObj.greet();

// Question 3:
// In your own words what will this point to and why?
// Answer --- 'this' returns nothing/empty, because we לא קראנו ל- the 'myFuncDec', if we did, this will return window
const myFuncDec = function () {
    console.log(this);
};

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// Answer --- point to the object of element class 
document.querySelector(".element").addEventListener(() => {
    console.log(this);
});