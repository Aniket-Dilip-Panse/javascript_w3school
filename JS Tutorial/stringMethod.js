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


// string slicing.
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)
console.log(name.slice(0, 5))
console.log(name.substring(0, 5))
console.log(name.substr(0, 5))

console.log(address.toUpperCase())
console.log(address.toLowerCase())
console.log(name.includes('n'))

console.log(name.concat(' ', address))


let car = '  lamborghini  '
console.log(car.trim()) // remove spaces from both side
console.log(car.trimStart()) // remove spaces from start
console.log(car.trimEnd()) // remove spaces from end
console.log(info.email.includes('@'))

// split method
let str = 'aniket, dilip, panse'
let arr = str.split(',')
console.log(arr)