//variables
const resetBtn = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');
const colorPicker = document.querySelector('.colorPicker');

//eventListeners 
boxes.forEach(function(box, index){
    box.addEventListener('click', toggleRed);

})

boxes.forEach(function(box, index){
    box.addEventListener('click', toggleYellow);
})

resetBtn.addEventListener('click', clearGrid);

colorPicker.forEach(function(colorPicker, index){
    colorPicker.addEventListener('click', toggleColorPicker);
})


//fuctions
function toggleRed(e){
    const element = e.target;
    element.classList.toggle('red');
}

function toggleYellow(e){
    const element = e.target;
    element.classList.toggle('yellow');
}

function clearGrid(e){
    boxes.forEach((box, index) => {
        box.classList.remove('red');
        box.classList.remove('yellow');
    });
}

function toggleColorPicker(e){
    const element = e.target; 
    element.classList.toggle('colorPicker');
}
