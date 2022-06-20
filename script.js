let drawGrid = document.querySelector('.drawGrid');
let buttonSize = document.querySelector('.buttonSize');
let reset = document.querySelector('.resetGrid');

buttonSize.addEventListener('click', changeSize);
reset.addEventListener('click', resetGrid);

// Changes the size of the grid
function changeSize() {
  let size = parseInt(
    prompt('What size do you want the grid?\n(min. 2, max. 100)')
  );
  // Checks if input for grid size is a number, less than 2 or greater than 100, if it is, alert invalid.
  if (isNaN(size) || size < 2 || size > 100) {
    alert('Please choose a value within bounds.');
  } else {
    // Remove old grid
    while (drawGrid.firstChild) {
      drawGrid.removeChild(drawGrid.lastChild);
    }
    insertGrid(size);
  }
}
// Inserts the grid on the box, according to size selected by user
function insertGrid(size) {
  drawGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  drawGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.classList.add('gridSquare');
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });
    drawGrid.appendChild(square);
  }
}

// Default grid size of the page (64)
insertGrid(64);

// Upon clicking on the reset button, instead of removing all squares, just make it white again
function resetGrid() {
  let square = document.querySelectorAll('div.gridSquare');
  square.forEach((item) => {
    item.style.background = 'white';
  });
}
