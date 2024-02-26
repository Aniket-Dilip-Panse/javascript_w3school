// event in js like onclick onmouseover etc.

// method 1 to write direct events
// {/* <input type="submit" onclick="alert('Hello World')"> */}


// method 2 using function call
// <input type="submit" onclick="myFunction()">
function myFunction() {
    alert('Hello World');
}

// method 3 using arrow function
// <input type="submit" onclick={() => alert('Hello World')}>

// method 4 using eventListener
/* <input type="submit" id="myBtn">
let eventbtn = document.getElementById('myBtn');
eventbtn.addEventListener('click', () => alert('Hello World')) */