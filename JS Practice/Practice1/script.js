const draggable = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggable.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });
  
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });

});


containers.forEach(container => {
    container.addEventListener('dragover'e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
    }) 
})

var today = new Date().toISOString().split("T")[0];
document.getElementById("date-input").setAttribute("max", today)