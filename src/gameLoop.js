"use strict";

const ctx = document.getElementById("canvas").getContext("2d");

const pongBoard = new PongBoard();

const gameCanvas = new ScaleCanvas(
  pongBoard.height,
  pongBoard.width,
  pongBoard.maxMultiplier,
  pongBoard.windowPercentage
);

const playerBat = new Bat(pongBoard.height);

let upPressed = false;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff8080";
  ctx.fillRect(playerBat.x, playerBat.y, playerBat.width, playerBat.height);
}

function gameLoop(timeStamp) {
  update();
  render();
  window.requestAnimationFrame(gameLoop);
}

function update() {
  if (upPressed) {
    playerBat.up();
  }
}

function keyDownHandler(event) {
  if (event.keyCode == 65) {
    upPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode == 65) {
    upPressed = false;
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
