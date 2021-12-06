class PongBoard {
  constructor(
    gameHeight = 400,
    infobarHeight = 200,
    width = 750,
    windowPercentage = 0.8,
    maxMultiplier = 20
  ) {
    this.height = gameHeight + infobarHeight;
    this.gameHeight = gameHeight;
    this.infobarHeight = infobarHeight;
    this.width = width;
    this.windowPercentage = windowPercentage;
    this.maxMultiplier = maxMultiplier;
  }

  infobarY(y) {
    return y + 401;
  }
}
