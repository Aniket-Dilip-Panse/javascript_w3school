// The let keyword was introduced in ES6 (2015)

// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same scope

// console.log(x); // ReferenceError
let y = 10; //global let variable
{ 
    let x = 20; // local let variable
    console.log(x); 
}
let x = 30; // global let variable
// variable x cannot be accessed here
// console.log(x);

{
     var name = 'rahul';
    console.log(name);
}

console.log(name);// var variable can be accessed here.

//Note:- ==============IMPORTANT==================
// var x = 2;   // Allowed
// let x = 3;   // Not allowed

// {
// let x = 2;   // Allowed
// let x = 3;   // Not allowed
// }

// {
// let x = 2;   // Allowed
// var x = 3;   // Not allowed
// }
// ==================================================