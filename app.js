//variables
const resetBtn = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');

//eventListeners 
boxes.forEach(function(box, index){
    box.addEventListener('click', toggleRed); 

})

resetBtn.addEventListener('click', clearGrid);


//fuctions
function toggleRed(e){
    const element = e.target;
    element.classList.toggle('red');
}

function clearGrid(e){
    boxes.forEach((box, index) => {
        box.classList.remove('red');
    });
}
