"use strict";

class PongBoard {
  constructor(
    height = 400,
    width = 750,
    windowPercentage = 0.8,
    maxMultiplier = 20
  ) {
    this.height = height;
    this.width = width;
    this.windowPercentage = windowPercentage;
    this.maxMultiplier = maxMultiplier;
  }
}
