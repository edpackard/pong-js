class Controls {
  constructor(p1UpKey = 65, p1DownKey = 90, p2UpKey = 75, p2DownKey = 77) {
    this.p1Up = false;
    this.p1Down = false;
    this.p2Up = false;
    this.p2Down = false;
    this.p1UpKey = p1UpKey;
    this.p1DownKey = p1DownKey;
    this.p2UpKey = p2UpKey;
    this.p2DownKey = p2DownKey;
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

  keyPress(event, isPressed) {
    if (event.keyCode == this.p1UpKey) {
      this.p1Up = isPressed;
    } else if (event.keyCode == this.p1DownKey) {
      this.p1Down = isPressed;
    }
    if (event.keyCode == this.p2UpKey) {
      this.p2Up = isPressed;
    } else if (event.keyCode == this.p2DownKey) {
      this.p2Down = isPressed;
    }
  }
}
