function scene5Setup() {
  createCanvas(400, 400);
}

function scene5Draw() {
  background(173, 193, 120);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(16);
  fill(118, 97, 83);
  text("A rushing stream feels more...", 200, 150);
  drawButton(100, 200, 100, 40, "Refreshing", isMouseOver(100, 200, 100, 40));
  drawButton(300, 200, 100, 40, "Dangerous", isMouseOver(300, 200, 100, 40));
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

function scene5MousePressed() {
  if (isMouseOver(100, 200, 100, 40)) {
    console.log("Refreshing button clicked!");
    goToScene(10);
  }
  if (isMouseOver(300, 200, 100, 40)) {
    console.log("Dangerous button clicked!");
    goToScene(11);
  }
}
