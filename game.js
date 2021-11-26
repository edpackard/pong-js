"use strict";

const ctx = document.getElementById("canvas").getContext("2d");

// native (game) width and height (does not change)
const nHeight = 200;
const nWidth = 400;
// canvas width and height (scales when window resized)
let cHeight = nHeight;
let cWidth = nWidth;

// tweak max multiplier to fit
const maxMultiplier = 20;
const maxWidth = nWidth * maxMultiplier;
const maxHeight = nHeight * maxMultiplier;

// % of browser window to be taken up by the canvas
const windowPercentage = 0.5;

function resize() {
  cWidth = window.innerWidth;
  cHeight = window.innerHeight;

  // ratio of the native game size width to height
  const nativeRatio = nWidth / nHeight;
  const browserWindowRatio = cWidth / cHeight;

  // browser window is too wide
  if (browserWindowRatio > nativeRatio) {
    cHeight = Math.floor(cHeight * windowPercentage); // optional
    if (cHeight > maxWidth) cHeight = maxHeight; // optional
    cWidth = Math.floor(cHeight * nativeRatio);
  } else {
    // browser window is too high
    cWidth = Math.floor(cWidth * windowPercentage); // optional
    if (cWidth > maxWidth) cWidth = maxWidth; // optional
    cHeight = Math.floor(cWidth / nativeRatio);
  }
  // set the canvas style width and height to the new width and height
  ctx.canvas.style.width = `${cWidth}px`;
  ctx.canvas.style.height = `${cHeight}px`;
}

function render() {
  ctx.fillRect(0, 50, 100, 50);
}

window.addEventListener("load", () => {
  console.log("load2");
  ctx.canvas.width = nWidth;
  ctx.canvas.height = nHeight;
  render();
});

window.addEventListener("resize", () => {
  console.log("resize!");
  resize();
  render();
});