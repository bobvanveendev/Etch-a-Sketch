// Container
const container = document.querySelector(".container");

// Loop
for (x = 0; x < 255; x++) {
  const div = document.createElement("div");
  div.className = "square";

  container.append(div);
}
