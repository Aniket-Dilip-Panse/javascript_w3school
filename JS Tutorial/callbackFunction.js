// A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// we don't have to call the function into another function we need to just pass the function into another function.

const calculate = (a,b,operation) => { 
    return operation(a, b);
}

calculate(5, 5, (a, b) => a + b)
const result = calculate(5, 5, function (num1, num2) {
    return num1 + num2
})
console.log(result)

function evaluate(function2) {
   return function2
}
console.log(evaluate(result));