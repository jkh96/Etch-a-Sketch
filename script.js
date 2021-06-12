// Create elements
let container = document.createElement('div');

// create class
container.classList.add('container')

// append containers and divs to html file
document.body.appendChild(container);

// when page loads
window.addEventListener('load', setDefault)

function setDefault() {
    setlayout(16)
    createDivs(16)
}

function setlayout(size) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}


// create grid
function createDivs(number) {
for (let i = 0; i < number * number; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid')
    // container.style.display = 'grid';
    // container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    // container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    grid.style.border = "1px solid black"
    container.appendChild(grid);
    // grid.addEventListener("mouseover", fillColor)
  }
}

// it only does black could not figure out how to pass button clicks to change color. it was something extra i wanted to do
function fillColor(color) {
    const grid = document.querySelectorAll('.container > div')
    grid.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            if (color == 'blue') {
                e.target.style.backgroundColor = 'rgb(0, 102, 255)';
                e.target.style.opacity = 1;
            } else {
                e.target.style.backgroundColor = 'rgb(0, 0, 0)'
            }
        })
    })
}
//   if (color == 'blue') {
//     this.style.backgroundColor = `rgb(0, 102, 255)`
//   } else if (color == 'red') {
//     this.style.backgroundColor = `rgb(255, 0, 0)`
//   } else (color == 'black' ) 
//     this.style.backgroundColor = `rgb(0, 0, 0)`
//   }
  
// remove grid
function gridErase(){
    const gridItems = document.querySelectorAll('.container > div');
    gridItems.forEach((element) => {
        container.removeChild(element);
    })
}


// This is not my function. i copied this!!!!! i really don't wanna rely other peoples code.
function eraseAllColor() {
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}


// this is what i was trying to do.
function erase() {
  const gridItems = document.querySelectorAll('.container > div');
// Look up how this for each function works!!!!!!!!
  gridItems.forEach((item) => {
    item.style.removeProperty('background-color')
    // item.style.backgroundColor = '#ffff'
    // item.style.opacity = '1';
  });
}

// create function to resize grid
function newGrid() {
    let newSize = prompt("Select a new size!")
    
    if (newSize < 1 || newSize > 64 || isNaN(newSize)) {
        alert("Please eneter a number between 1 and 64")
        newGrid()
    } else
    gridErase();
    setlayout(newSize);
    createDivs(newSize);
}

/* Things to do!!! 
clean up fillColor function!
*/