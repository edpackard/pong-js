class Controls {
  constructor() {
    this.p1UpPressed = false;
    this.p1DownPressed = false;
    this.p2UpPressed = false;
    this.p2DownPressed = false;
  }

  controlUpdate(p1Bat, p2Bat) {
    if (this.p1UpPressed) {
      console.log("uppress", p1Bat);
      return p1Bat.up();
    }
    if (this.p1DownPressed) {
      console.log("downpress", p1Bat);
      return p1Bat.down();
    }
    if (this.p2UpPressed) {
      return p2Bat.up();
    }
    if (this.p2DownPressed) {
      return p2Bat.down();
    }
  }

  keyDown(event) {
    if (event.keyCode == 65) {
      this.p1UpPressed = true;
      console.log("conditional is:", this.p1UpPressed);
    } else if (event.keyCode == 90) {
      this.p1DownPressed = true;
    }
    if (event.keyCode == 75) {
      this.p2UpPressed = true;
    } else if (event.keyCode == 77) {
      this.p2DownPressed = true;
    }
    console.log("at end of function conditional is:", this.p1UpPressed);
  }

  keyUp(event) {
    if (event.keyCode == 65) {
      this.p1UpPressed = false;
    } else if (event.keyCode == 90) {
      this.p1DownPressed = false;
    }
    if (event.keyCode == 75) {
      this.p2UpPressed = false;
    } else if (event.keyCode == 77) {
      this.p2DownPressed = false;
    }
  }
}
