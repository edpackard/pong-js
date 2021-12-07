class Ball {
  constructor(boardHeight, boardWidth, size = 20) {
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;
    this.height = size;
    this.width = size;
    this.x = (boardWidth - this.width) / 2;
    this.y = (boardHeight - this.height) / 2;
    this.dx = 0;
    this.dy = 0;
    this.speed = 5;
  }

  updatePos() {
    this._normaliseVector();
    for (let i = 0; i < this.speed; i++) {
      this.x += this.dx;
      if (
        this.y + this.dy < 0 ||
        this.y + this.dy > this.boardHeight - this.height
      ) {
        this.dy *= -1;
      }
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

  _normaliseVector() {
    let magnitude = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    this.dx = this.dx / magnitude;
    this.dy = this.dy / magnitude;
  }
}
