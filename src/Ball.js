class Ball {
  constructor(boardHeight, boardWidth) {
    this.size = 20;
    this.x = (boardWidth - this.size) / 2;
    this.y = (boardHeight - this.size) / 2;
    this.speed = 5;
  }

  left() {
    this.x -= this.speed;
  }
}
