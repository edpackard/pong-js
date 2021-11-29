"use strict";

const ctx = document.getElementById("canvas").getContext("2d");

const pongBoard = new PongBoard();

const gameCanvas = new ScaleCanvas(
  pongBoard.height,
  pongBoard.width,
  pongBoard.maxMultiplier,
  pongBoard.windowPercentage
);

const p1Bat = new Bat(pongBoard.height, pongBoard.width);
const p2Bat = new Bat(pongBoard.height, pongBoard.width, 2);

let p1UpPressed = false; // extract to Control class
let p1DownPressed = false; // extract to Control class
let p2UpPressed = false; // extract to Control class
let p2DownPressed = false; // extract to Control class

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff8080";
  ctx.fillRect(p1Bat.x, p1Bat.y, p1Bat.width, p1Bat.height);
  ctx.fillRect(p2Bat.x, p2Bat.y, p2Bat.width, p2Bat.height);
}

function gameLoop(timeStamp) {
  update();
  render();
  window.requestAnimationFrame(gameLoop);
}

function update() {
  // extract following conditionals to Control class
  if (p1UpPressed) {
    p1Bat.up();
  }
  if (p1DownPressed) {
    p1Bat.down();
  }
  if (p2UpPressed) {
    p2Bat.up();
  }
  if (p2DownPressed) {
    p2Bat.down();
  }
}

// extract keyHandlers to Control class
function keyDownHandler(event) {
  if (event.keyCode == 65) {
    p1UpPressed = true;
  } else if (event.keyCode == 90) {
    p1DownPressed = true;
  }
  if (event.keyCode == 75) {
    p2UpPressed = true;
  } else if (event.keyCode == 77) {
    p2DownPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode == 65) {
    p1UpPressed = false;
  } else if (event.keyCode == 90) {
    p1DownPressed = false;
  }
  if (event.keyCode == 75) {
    p2UpPressed = false;
  } else if (event.keyCode == 77) {
    p2DownPressed = false;
  }
}

window.addEventListener("load", () => {
  ctx.canvas.width = gameCanvas.nWidth;
  ctx.canvas.height = gameCanvas.nHeight;
  gameCanvas.resize(ctx);
  window.requestAnimationFrame(gameLoop);
});

window.addEventListener("resize", () => {
  gameCanvas.resize(ctx);
  render();
});

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
