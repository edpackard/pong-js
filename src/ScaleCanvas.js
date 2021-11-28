"use strict";

class ScaleCanvas {
  constructor(height, width, maxMultiplier, windowPercentage) {
    this.nHeight = height;
    this.nWidth = width;
    this.maxMultiplier = maxMultiplier;
    this.windowPercentage = windowPercentage; // % of browser window taken up by canvas
  }

  resize(ctx, scaleWindow = window) {
    const maxWidth = this.nWidth * this.maxMultiplier;
    const maxHeight = this.nHeight * this.maxMultiplier;
    let cWidth = scaleWindow.innerWidth;
    let cHeight = scaleWindow.innerHeight;
    // ratio of the native game size width to height:
    const nativeRatio = this.nWidth / this.nHeight;
    const browserWindowRatio = cWidth / cHeight;
    // browser window is too wide:
    if (browserWindowRatio > nativeRatio) {
      cHeight = Math.floor(cHeight * this.windowPercentage); // optional
      if (cHeight > maxWidth) cHeight = maxHeight; // optional
      cWidth = Math.floor(cHeight * nativeRatio);
    } else {
      // browser window is too high:
      cWidth = Math.floor(cWidth * this.windowPercentage); // optional
      if (cWidth > maxWidth) cWidth = maxWidth; // optional
      cHeight = Math.floor(cWidth / nativeRatio);
    }
    // set canvas style width and height to new width and height
    ctx.canvas.style.width = `${cWidth}px`;
    ctx.canvas.style.height = `${cHeight}px`;
  }
}
