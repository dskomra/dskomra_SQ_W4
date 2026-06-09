function scene3Setup() {
  createCanvas(400, 400);
}

function scene3Draw() {
  background(173, 193, 120);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(16);
  fill(118, 97, 83);
  text("Plants should be...", 200, 150);
  drawButton(100, 200, 100, 40, "Gentle", isMouseOver(100, 200, 100, 40));
  drawButton(300, 200, 100, 40, "Defiant", isMouseOver(300, 200, 100, 40));
}

function drawButton(x, y, w, h, label, isHovered) {
  push();
  rectMode(CENTER);
  fill(isHovered ? color(169, 132, 103) : color(118, 97, 83));
  noStroke();
  rect(x, y, w, h, 8);

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text(label, x, y);
  pop();
}

function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

function scene3MousePressed() {
  if (isMouseOver(100, 200, 100, 40)) {
    console.log("Gentle button clicked!");
    goToScene(6);
  }
  if (isMouseOver(300, 200, 100, 40)) {
    console.log("Defiant button clicked!");
    goToScene(7);
  }
}
