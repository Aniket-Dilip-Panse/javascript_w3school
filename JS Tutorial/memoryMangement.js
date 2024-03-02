// past programming language we need to handle memory
// but in javascript is handle by garbage collector
// ++++++++++++++++++++++++++++++++++++++++++
// there are two type of memory
// 1) stack memory (primitive value) :- copy of value is stored in stack
// 2) heap memory (non-primitive value) :- original value is stored in heap

let myYoutubename = 'Programmer Aniket'
console.log(myYoutubename) //stack memory

let myObject = {
    name: 'Programmer Aniket',
    age: 21
}
console.log(myObject) //heap memory


// =============== MOST IMPORTANT===============
// stack :- stack provide the copy of value
// heap :- heap provide reference of value 