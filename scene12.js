function scene12Setup() {
  createCanvas(400, 400);
}

function scene12Draw() {
  background(173, 193, 120);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(16);
  fill(118, 97, 83);
  text("You've arrived at...", 200, 150);
  textSize(30);
  fill(113, 119, 68);
  text("Merry Meadow", 200, 185);
  drawButton(200, 300, 150, 40, "Travel back", isMouseOver(200, 300, 150, 40));
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

function scene12MousePressed() {
  if (isMouseOver(200, 300, 150, 40)) {
    console.log("Travel back button clicked");
    goToScene(1);
  }
}
