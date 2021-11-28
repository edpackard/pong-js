class Bat {
  constructor(boardHeight) {
    this.width = 20;
    this.height = 100;
    this.x = 0;
    this.y = (boardHeight - this.height) / 2;
    this.speed = 5;
    this.errorCheck(boardHeight);
  }

  up() {
    this.y -= this.speed;
  }

  down() {
    this.y += this.speed;
  }

  errorCheck(boardHeight) {
    if (boardHeight < this.height) {
      throw "Board size is too small";
    }
  }
}
