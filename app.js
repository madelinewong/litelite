//variables
const resetBtn = document.querySelector('#reset');
const picker = document.querySelector('#picker');
// const box = document.querySelector('.box');
const gridSizeForm = document.querySelector('#grid-size');
const main = document.querySelector('main');

//eventListeners 
resetBtn.addEventListener('click', clearGrid);
gridSizeForm.addEventListener('submit', changeGrid);

//initalized or started
changeGrid();

//functions


function changeBoxColor(e){
    const element = e.target; 
    element.style.backgroundColor = picker.value;
}

function clearGrid(e){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.classList.remove('red');
    });
}


function changeGrid(e){
    if(e) {
        e.preventDefault();
    }
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    const grid = makeGrid(gridSizeValue);
    //set the main to the grid 
   main.innerHTML = ''; //this clears the main area
   grid.forEach((row) => {
     main.appendChild(row);  
   });

}

function makeGrid(size){  
    const rows = [];
    for(let i = 0; i < size; i += 1){
        //make the grid
        //make a div with class of row 
        const row = document.createElement('div');
        row.classList.add('row');
        //make a div with class of col-md-12 with a class of row 
        const column = document.createElement('div'); 
        column.classList.add('col-md-12');
        row.appendChild(column); 
        //make six divs with class of box inside of col-md-12
        for(let i = 0; i < size; i += 1){
            const box = document.createElement('div'); 
            box.classList.add('box'); 
            box.addEventListener('click', changeBoxColor);
            column.appendChild(box);
        }
    rows.push(row);
    }
    return rows;
}