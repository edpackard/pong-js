class Bat {
  constructor(boardHeight, boardWidth, player = 1) {
    this.width = 20;
    this.height = 100;
    this.x = player == 1 ? 0 : boardWidth - this.width;
    this.y = (boardHeight - this.height) / 2;
    this.speed = 5;
    this.boardHeight = boardHeight;
    this.errorCheck();
  }

  up() {
    let move = this.y - this.speed;
    move < 0 ? (this.y = 0) : (this.y = move);
  }

  down() {
    let move = this.y + this.speed;
    move + this.height > this.boardHeight
      ? (this.y = this.boardHeight - this.height)
      : (this.y = move);
  }

  errorCheck() {
    if (this.boardHeight < this.height) {
      throw "Board size is too small";
    }
  }
}
