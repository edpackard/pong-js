class Bat {
  constructor(boardHeight, boardWidth, player = 1) {
    this.width = 20;
    this.height = 100;
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;
    this._errorCheck();
    this.player = player;
    this.x = this._setX();
    this.y = this._setY();
    this.speed = 5;
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

  _setX() {
    return this.player == 1 ? 0 : this.boardWidth - this.width;
  }

  _setY() {
    return (this.boardHeight - this.height) / 2;
  }

  _errorCheck() {
    if (this.boardHeight < this.height) {
      throw "Board height is too small";
    }
    if (this.boardWidth < this.width * 2) {
      throw "Board width is too small";
    }
  }
}
