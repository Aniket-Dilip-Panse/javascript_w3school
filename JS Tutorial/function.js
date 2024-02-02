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