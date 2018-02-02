//variables
const resetBtn = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');
const colorPicker = document.querySelector('.colorPicker');
const gridSizeForm = document.querySelector('#grid-size');
const main = document.querySelector('main');

//eventListeners 
boxes.forEach(function(box, index){
    box.addEventListener('click', toggleRed);

})

boxes.forEach(function(box, index){
    box.addEventListener('click', toggleYellow);
})

resetBtn.addEventListener('click', clearGrid);



gridSizeForm.addEventListener('submit', changeGrid);

//functions
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

function changeGrid(e){
    e.preventDefault();
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    const grid = makeGrid(gridSizeValue);
//set the main to the grid 
   main.innerHTML = ''; //this clears the main area
   main.appendChild(grid);

}

function makeGrid(size){
    const element =  document.createElement('h1');
    element.textContent = 'Snails!';
    return element;
       //make the grid
    //make a div with class of row 
    //make a div with class of md-12 with a class of row 
    //make six divs with class of box inside of col-md-12
    //copy and pasted six times. 
}