"use strict";

const ctx = document.getElementById("canvas").getContext("2d");

const pongBoard = new PongBoard();

const gameCanvas = new ScaleCanvas(
  pongBoard.height,
  pongBoard.width,
  pongBoard.maxMultiplier,
  pongBoard.windowPercentage
);

const controls = new Controls();

const ball = new Ball(pongBoard.gameHeight, pongBoard.width);
ball.down(); // testing
ball.left(); // testing
const p1Bat = new Bat(pongBoard.gameHeight, pongBoard.width);
const p2Bat = new Bat(pongBoard.gameHeight, pongBoard.width, 2);

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDividingLine();
  drawGameObjects();
}

function gameLoop(timeStamp) {
  update();
  render();
  window.requestAnimationFrame(gameLoop);
}

function update() {
  ball.updatePos(); // testing
  controls.controlUpdate(p1Bat, p2Bat);
  // collision detection ?
}

function keyDownHandler(event) {
  controls.keyPress(event, true);
}

function keyUpHandler(event) {
  controls.keyPress(event, false);
}

function drawDividingLine() {
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(0, pongBoard.infobarY(0));
  ctx.lineTo(pongBoard.width, pongBoard.infobarY(0));
  ctx.stroke();
}

function drawGameObjects() {
  ctx.fillStyle = "#ff8080";
  [p1Bat, p2Bat].forEach((bat) =>
    ctx.fillRect(bat.x, bat.y, bat.width, bat.height)
  );
  ctx.fillRect(ball.x, ball.y, ball.size, ball.size);
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
