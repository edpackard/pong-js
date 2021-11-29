class Ball {
  constructor(boardHeight, boardWidth) {
    this.size = 20;
    this.x = (boardWidth - this.size) / 2;
    this.y = (boardHeight - this.size) / 2;
    this.dx; // vector - need to
    this.dy;
    this.speed = 5;
  }

  updatePos() {
    for (let i = 0; i < this.speed; i++) {
      this.x += this.dx;
      this.y += this.dy;
    }
  }

  left() {
    this.dx = -1;
  }

  right() {
    this.dx = 1;
  }

  up() {
    this.dy = -1;
  }

  down() {
    this.dy = 1;
  }
}
