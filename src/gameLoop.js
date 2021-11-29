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

const ball = new Ball(pongBoard.height, pongBoard.width);
ball.down(); // testing
ball.left(); // testing
const p1Bat = new Bat(pongBoard.height, pongBoard.width);
const p2Bat = new Bat(pongBoard.height, pongBoard.width, 2);

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff8080";
  ctx.fillRect(p1Bat.x, p1Bat.y, p1Bat.width, p1Bat.height);
  ctx.fillRect(p2Bat.x, p2Bat.y, p2Bat.width, p2Bat.height);
  ctx.fillRect(ball.x, ball.y, ball.size, ball.size);
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
  controls.keyDown(event);
}

function keyUpHandler(event) {
  controls.keyUp(event);
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
