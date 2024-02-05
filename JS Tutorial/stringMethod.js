let name = 'aniket dilip panse'
let email = 'aniket12@gmail.com'
let address = 'Mumbai'

let info = {
    'name': `${name}`,
    'email': `${email}`,
    'address': `${address}`
}

console.log(info);

let length = name.length
console.log(length)

let letter = name.at(4)
console.log(letter)

let letter2 = address.charAt(4)
console.log(letter2)

// ==========IMPORTANT=================
// The at() method is a new addition to JavaScript.

// It allows the use of negative indexes while charAt() do not.

// Now you can use myString.at(-2) instead of charAt(myString.length-2).

// The charAt() method does not support -negative indexes. but at() does.

let charCode = email.charCodeAt(0)
console.log(charCode) // return the ascii value of the string