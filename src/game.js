"use strict";

const ctx = document.getElementById("canvas").getContext("2d");

const height = 400;
const width = 750;
const windowPercentage = 0.8;
const maxMultiplier = 20;

const gameCanvas = new ScaleCanvas(
  height,
  width,
  maxMultiplier,
  windowPercentage
);

const batWidth = 20;
const batHeight = 100;
const playerX = 0;
let playerY = 0;
let playerDown;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff8080";
  ctx.fillRect(playerX, playerY, batWidth, batHeight);
  ctx.fillRect(width - batWidth, height - batHeight, batWidth, batHeight);
}

function gameLoop(timeStamp) {
  update();
  render();
  window.requestAnimationFrame(gameLoop);
}

function update() {
  if (playerY == 0) {
    playerDown = true;
  }
  if (playerY == height - batHeight) {
    playerDown = false;
  }
  playerDown ? playerY++ : playerY--;
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
