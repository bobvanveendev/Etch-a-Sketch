// Container
const container = document.querySelector(".container");

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
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      event.currentTarget.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

      let hovers = Number(event.currentTarget.dataset.hovers);
      hovers = hovers + 0.1;
      if (hovers > 1) {
        hovers = 1;
      }
      event.currentTarget.dataset.hovers = hovers;
      event.currentTarget.style.opacity = hovers;
    });

    container.append(div);
  }
}

// Function: Remove existing grid
function clearGrid() {
  container.replaceChildren();
}
