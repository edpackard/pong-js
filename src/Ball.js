class Ball {
  constructor(boardHeight, boardWidth) {
    this.size = 20;
    this.x = (boardWidth - this.size) / 2;
    this.y = (boardHeight - this.size) / 2;
    this.dx; // vector - need to
    this.dy;
    this.speed = 5;
  }

  left() {
    this.dx = -1;
  }

  right() {
    this.dx = 1;
  }
}
