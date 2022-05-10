function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255, 0, 0);
  noStroke();
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 40);
  }
}