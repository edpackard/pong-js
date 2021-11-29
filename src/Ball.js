class Ball {
  constructor(boardHeight, boardWidth) {
    this.size = 20;
    this.x = (boardWidth - this.size) / 2;
    this.y = (boardHeight - this.size) / 2;
    this.dx;
    this.dy;
    this.speed = 5;
  }

  left() {
    this.dx = this.x -= this.speed;
  }

  down() {
    this.dy = this.y += this.speed;
  }
}
