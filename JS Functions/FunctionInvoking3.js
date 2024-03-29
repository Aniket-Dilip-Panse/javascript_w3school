// The code inside a JavaScript function will execute when "something" invokes it.

// Invoking a JavaScript Function
// The code inside a function is not executed when the function is defined.

// The code inside a function is executed when the function is invoked.

// It is common to use the term "call a function" instead of "invoke a function".

// It is also common to say "call upon a function", "start a function", or "execute a function".

// In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.


function Myfunction(a, b) {
    console.log(a + b);
}

Myfunction(10,20)

// Note
// This is a common way to invoke a JavaScript function, but not a very good practice.
// Global variables, methods, or functions can easily create name conflicts and bugs in the global object.

// What is this?
// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.