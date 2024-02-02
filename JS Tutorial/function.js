// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// function without parameter
function myFunction() {
    console.log('namaskar');
    }
    
myFunction()

// function with parameter  
function newFunction(name, age, address) {
    console.log(name, age, address);
}

newFunction('aniket', 20, 'mumbai')

//function Expression:- It is same as a function declaration but the main difference it is assigned to a variable.

// ===============IMPORTANT============
// | In function Expression we can omit the function name|

// In function Expression hoisting is not possible.it will produce an error.
const result = function(){
    console.log('hello');
}
result()



// nested function in javascript most reactjs code is written in nested function.

function myFunction() {
    console.log('namaskar');
    function newFunction(name, age, address) {
        console.log(name, age, address);
    }
    newFunction('aniket', 20, 'mumbai')
}
myFunction()


// ADVANCED FUNCTION IN JAVASCRIPT
// 1) Arrow Function
// 2) Callback Function // most of the time used

// 1) Arrow Function.


// syntax 1):-
/* 
   () => {
    statement
     }
*/


// syntax 2):-
//     () => expression

// syntax 3):-
//     (para1,para2,para3) => statement
const greet = (count) => {
    for (let i = 0; i < count; i++) {
        console.log(`${i}`);
    }
    console.log('namaskar');
}
greet(4);

const square = (x) => x * x
console.log(square(5))
