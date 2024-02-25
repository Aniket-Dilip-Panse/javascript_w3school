// Variables are Containers for Storing Data

// NOTE:- ===============IMPORTANT==============
// In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.

// JavaScript Variables can be declared in 4 ways:

// 1) Automatically
// 2)Using var
// 3)Using let
// 4)Using const

// 1)In this first example, x, y, and z are undeclared variables.

// They are automatically declared when first used:
x = 5;
y = 6;
z = x + y;
console.log(z);

// 2)var
// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers

// 6. Only use const if you MUST support ES6 (2015) or newer browsers

// 7. Variable declared but does not assign value to it will be undefined and output will be undefined