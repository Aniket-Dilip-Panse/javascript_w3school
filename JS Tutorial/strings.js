// strings in javascript 
let a = "hello"
let b = "world"
console.log(a + ' ' + b)

// Template Strings
// Templates were introduced with ES6 (JavaScript 2016).

// Templates are strings enclosed in backticks (`This is a template string`).

// Templates allow single and double quotes inside a string:
let value = `The sum of 2 and 3 is ${2 + 3}`;
console.log(value)

// String Length
console.log(value.length)

// string == and ===
console.log(a == b) //true
console.log(a === b) // false objects cannot be compared in javascript.

console.log(typeof value)