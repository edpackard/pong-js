class Ball {
  constructor(boardHeight, boardWidth) {
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;
    this.size = 20;
    this.x = (boardWidth - this.size) / 2;
    this.y = (boardHeight - this.size) / 2;
    this.dx = 0;
    this.dy = 0;
    this.speed = 5;
  }

  updatePos() {
    this._normaliseVector();
    for (let i = 0; i < this.speed; i++) {
      if (
        this.x + this.dx < 0 ||
        this.x + this.dx > this.boardWidth - this.size
      ) {
        this.x = (this.boardWidth - this.size) / 2;
        this.y = (this.boardHeight - this.size) / 2;
        this.dx *= -1;
        return;
      } else {
        this.x += this.dx;
      }
      if (
        this.y + this.dy < 0 ||
        this.y + this.dy > this.boardHeight - this.size
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
