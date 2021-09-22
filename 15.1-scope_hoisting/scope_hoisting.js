//////////////// BLOCK 1 /////////////////
function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();

//2 - undefined
//3 - 2

//////////////// BLOCK 2 /////////////////
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};

console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//25- Aurelio De Rosa
//27- undefined

//////////////// BLOCK 3 /////////////////
function funcB() {
    let a = b = 0;
    a++;
    return a;
}

funcB();
console.log(typeof a);
console.log(typeof b);

//39 - undefined
//40 - undefined

//////////////// BLOCK 4 /////////////////
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();

//50 - 2
//50 - 2

//////////////// BLOCK 5 /////////////////
function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e);

//61 - 1
//66 - ERROR

//////////////// BLOCK 6 /////////////////
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

//74- undefined
//72- 1