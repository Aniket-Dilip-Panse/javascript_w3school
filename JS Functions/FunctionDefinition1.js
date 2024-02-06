// JavaScript functions are defined with the function keyword.

// You can use a function declaration or a function expression.

// 1)function declaration:- The function is not stored in variable.
function myFunction() {
    console.log('hello');
}

// 2)function expression:- The function is stored in variable.The variable can be used as a function.

// The function above is actually an anonymous function (a function without a name).

// The function above ends with a semicolon because it is a part of an executable statement.
const myFunction = function (a, b) {
    console.log('hello');
    console.log(a + b);
};
let sum = myFunction(10, 20)
console.log(sum)