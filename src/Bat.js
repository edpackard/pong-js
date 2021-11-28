class Bat {
  constructor(boardHeight) {
    this.width = 20;
    this.height = 100;
    this.x = 0;
    this.y = (boardHeight - this.height) / 2;
    this.speed = 5;
  }

  up() {
    this.y -= this.speed;
  }

  down() {
    this.y += this.speed;
  }
}
