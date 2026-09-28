// Container
const container = document.querySelector(".container");

// Drawing state
let drawing = false;
let lastSquare = null;

// Initial grid
createGrid(16);

// Button
const button = document.querySelector(".grid-button");

button.addEventListener("click", () => {
  let grid = prompt("Give the size of the grid");

  grid = Number(grid);

  while (
    Number.isNaN(grid) ||
    !Number.isInteger(grid) ||
    grid < 1 ||
    grid > 100
  ) {
    alert("Please enter a whole number between 1 and 100");

    grid = Number(prompt("Give the size of the grid"));
  }

  clearGrid();
  createGrid(grid);
});

// Custom grid
function createGrid(size) {
  const squareSize = container.clientWidth / size;

  for (let x = 0; x < size * size; x++) {
    const div = document.createElement("div");
    div.className = "square";
    div.style.width = squareSize + "px";
    div.style.height = squareSize + "px";
    div.dataset.hovers = 0;

    div.addEventListener("mouseover", (event) => {
      colorSquare(event.currentTarget);
    });

    container.append(div);
  }
}

// Mobile drawing
container.addEventListener("pointerdown", (event) => {
  drawing = true;

  if (event.target.classList.contains("square")) {
    colorSquare(event.target);
    lastSquare = event.target;
  }
});

container.addEventListener("pointermove", (event) => {
  if (!drawing) return;

  const square = document.elementFromPoint(event.clientX, event.clientY);

  if (square && square.classList.contains("square") && square !== lastSquare) {
    colorSquare(square);
    lastSquare = square;
  }
});

window.addEventListener("pointerup", () => {
  drawing = false;
  lastSquare = null;
});

// Color squares
function colorSquare(square) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  let hovers = Number(square.dataset.hovers);
  hovers = hovers + 0.1;
  if (hovers > 1) {
    hovers = 1;
  }
  square.dataset.hovers = hovers;
  square.style.opacity = hovers;
}

// Clear grid
function clearGrid() {
  container.replaceChildren();
}
