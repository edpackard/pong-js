"use strict";

const batWidth = 20;
const batHeight = 100;

function render() {
  let randomColor = Math.random() > 0.5 ? "#ff8080" : "#0099b0";
  ctx.fillStyle = randomColor;
  ctx.fillRect(0, 0, batWidth, batHeight);
  ctx.fillRect(nWidth - batWidth, nHeight - batHeight, batWidth, batHeight);
}

function gameLoop(timeStamp) {
  render();
  window.requestAnimationFrame(gameLoop);
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
