// Create an object with a name property.The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut.in this exercise, you are not allowed to use
// arrow functions.

const obj = {
    name: 'Monica',

    printName: function() {
        console.log(this.name);
    },

    printNameSecond: function () {
        let name = this.name
        setTimeout(function () {
            console.log(name);
        }, 1000);
    }
}
obj.printName()
obj.printNameSecond()