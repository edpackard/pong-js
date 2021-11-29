class Controls {
  constructor() {
    this.p1Up = false;
    this.p1Down = false;
    this.p2Up = false;
    this.p2Down = false;
  }

  controlUpdate(p1, p2) {
    if (this.p1Up) {
      p1.up();
    }
    if (this.p1Down) {
      p1.down();
    }
    if (this.p2Up) {
      p2.up();
    }
    if (this.p2Down) {
      p2.down();
    }
  }

  keyDown(event) {
    if (event.keyCode == 65) {
      this.p1Up = true;
    } else if (event.keyCode == 90) {
      this.p1Down = true;
    }
    if (event.keyCode == 75) {
      this.p2Up = true;
    } else if (event.keyCode == 77) {
      this.p2Down = true;
    }
  }

  keyUp(event) {
    if (event.keyCode == 65) {
      this.p1Up = false;
    } else if (event.keyCode == 90) {
      this.p1Down = false;
    }
    if (event.keyCode == 75) {
      this.p2Up = false;
    } else if (event.keyCode == 77) {
      this.p2Down = false;
    }
  }
}
