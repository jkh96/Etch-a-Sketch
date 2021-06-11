// Create elements
let div = document.createElement('div');
let container = document.createElement('div')

// create classes and id's
div.setAttribute('class','box')
container.setAttribute('id', 'container')

// append containers and divs to html file
document.getElementById('sketchpad').appendChild(container);

// create grid
function createDivs(number) {
for (let i = 0; i < number; i++) {
    const grid = document.createElement('div')
    container.style.display = 'grid'
    container.style.gridTemplateColumns = "repeat(${number}, 1fr)"
    container.style.gridTemplateRows = "repeat(${number}, 1fr"
    container.appendChild(grid)
}
}

createDivs(16)
