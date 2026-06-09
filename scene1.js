function scene1Setup() {
  createCanvas(400, 400);
}

function scene1Draw() {
  background(173, 193, 120);
  textAlign(CENTER, CENTER);

  // Title
  textStyle(BOLD);
  textSize(30);
  fill(118, 97, 83);
  text("The Wavelength Woods", width / 2, 80);

  // Subtitle
  textSize(14);
  fill(113, 119, 68);
  text("Where your intuition guides you through!", width / 2, 120);

  // Question and Buttons
  textStyle(BOLD);
  textSize(16);
  fill(118, 97, 83);
  text("An owl’s hoot is more…", 200, 250);
  drawButton(100, 300, 100, 40, "Wonder", isMouseOver(100, 300, 100, 40));
  drawButton(300, 300, 100, 40, "Warning", isMouseOver(300, 300, 100, 40));
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

function scene1MousePressed() {
  if (isMouseOver(100, 300, 100, 40)) {
    console.log("Wonder button clicked!");
    goToScene(2);
  }
  if (isMouseOver(300, 300, 100, 40)) {
    console.log("Warning button clicked!");
    goToScene(3);
  }
}
