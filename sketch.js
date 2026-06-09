let currentScene = 1;

function setup() {
  createCanvas(400, 400);
  scene1Setup();
}

function draw() {
  if (currentScene === 1) scene1Draw();
  else if (currentScene === 2) scene2Draw();
  else if (currentScene === 3) scene3Draw();
  else if (currentScene === 4) scene4Draw();
  else if (currentScene === 5) scene5Draw();
  else if (currentScene === 6) scene6Draw();
  else if (currentScene === 7) scene7Draw();
  else if (currentScene === 8) scene8Draw();
  else if (currentScene === 9) scene9Draw();
  else if (currentScene === 10) scene10Draw();
  else if (currentScene === 11) scene11Draw();
  else if (currentScene === 12) scene12Draw();
  else if (currentScene === 13) scene13Draw();
  else if (currentScene === 14) scene14Draw();
  else if (currentScene === 15) scene15Draw();
}

function mousePressed() {
  if (currentScene === 1) scene1MousePressed?.();
  else if (currentScene === 2) scene2MousePressed?.();
  else if (currentScene === 3) scene3MousePressed?.();
  else if (currentScene === 4) scene4MousePressed?.();
  else if (currentScene === 5) scene5MousePressed?.();
  else if (currentScene === 6) scene6MousePressed?.();
  else if (currentScene === 7) scene7MousePressed?.();
  else if (currentScene === 8) scene8MousePressed?.();
  else if (currentScene === 9) scene9MousePressed?.();
  else if (currentScene === 10) scene10MousePressed?.();
  else if (currentScene === 11) scene11MousePressed?.();
  else if (currentScene === 12) scene12MousePressed?.();
  else if (currentScene === 13) scene13MousePressed?.();
  else if (currentScene === 14) scene14MousePressed?.();
  else if (currentScene === 15) scene15MousePressed?.();
}

function goToScene(sceneNumber) {
  currentScene = sceneNumber;
}
