// The const keyword was introduced in ES6 (2015)

// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope

// When to use JavaScript const?
// Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp

const PI = 3.14;
console.log(PI);

// PI = 3.15; // TypeError

const arr = [1,2,3];
console.log(arr);

// arr = [1,2,3,4]; // TypeError

const obj = {
    name: 'rahul',
    age: 20
}

obj.age = 21;
console.log(obj)

// obj = {}; // TypeError

