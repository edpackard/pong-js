"use strict";

const batWidth = 20;
const batHeight = 100;
const playerX = 0;
let playerY = 0;
let playerDown;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff8080";
  ctx.fillRect(playerX, playerY, batWidth, batHeight);
  ctx.fillRect(nWidth - batWidth, nHeight - batHeight, batWidth, batHeight);
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
  if (playerY == nHeight - batHeight) {
    playerDown = false;
  }
  playerDown ? playerY++ : playerY--;
}

window.addEventListener("load", () => {
  ctx.canvas.width = cWidth;
  ctx.canvas.height = cHeight;
  resize();
  window.requestAnimationFrame(gameLoop);
});

window.addEventListener("resize", () => {
  resize();
  render();
});
