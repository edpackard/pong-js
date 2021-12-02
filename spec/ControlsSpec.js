"use strict";

describe("Controls", () => {
  let p1 = {
    up: () => {},
    down: () => {},
  };
  let p2 = {
    up: () => {},
    down: () => {},
  };

  it("sets values as false when initialised", () => {
    const controls = new Controls();
    expect(controls.p1Up).toBe(false);
    expect(controls.p1Down).toBe(false);
    expect(controls.p2Up).toBe(false);
    expect(controls.p2Down).toBe(false);
  });

  it("allows user to set key codes", () => {
    const controls = new Controls(40, 45, 50, 55);
    expect(controls.p1UpKey).toEqual(40);
    expect(controls.p1DownKey).toEqual(45);
    expect(controls.p2UpKey).toEqual(50);
    expect(controls.p2DownKey).toEqual(55);
  });

  it("sets default key codes", () => {
    const controls = new Controls();
    expect(controls.p1UpKey).toEqual(65);
    expect(controls.p1DownKey).toEqual(90);
    expect(controls.p2UpKey).toEqual(75);
    expect(controls.p2DownKey).toEqual(77);
  });

  it("responds to downpress of p1 up key", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 65 }, true);
    expect(controls.p1Up).toEqual(true);
  });
  it("responds to downpress of p1 down key", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 90 }, true);
    expect(controls.p1Down).toEqual(true);
  });

  it("responds to downpress of p2 up key", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 75 }, true);
    expect(controls.p2Up).toEqual(true);
  });

  it("responds to downpress of p2 down key", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 77 }, true);
    expect(controls.p2Down).toEqual(true);
  });

  it("responds to downpress and release of p1 up key", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 65 }, true);
    controls.keyPress({ keyCode: 65 }, false);
    expect(controls.p1Up).toEqual(false);
  });

  it("responds to downpress and release of p1 down key", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 90 }, true);
    controls.keyPress({ keyCode: 90 }, false);
    expect(controls.p1Down).toEqual(false);
  });

  it("responds to downpress of p2 up key", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 75 }, true);
    controls.keyPress({ keyCode: 75 }, false);
    expect(controls.p2Up).toEqual(false);
  });

  it("responds to downpress of p2 down key", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 77 }, true);
    controls.keyPress({ keyCode: 77 }, false);
    expect(controls.p2Down).toEqual(false);
  });

  it("allows p1 and p2 to use controls at same time", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 65 }, true);
    controls.keyPress({ keyCode: 77 }, true);
    expect(controls.p1Up).toEqual(true);
    expect(controls.p2Down).toEqual(true);
  });

  it("calls up function on p1 object when p1Up is true", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 65 }, true);
    spyOn(p1, "up");
    controls.controlUpdate(p1, p2);
    expect(p1.up).toHaveBeenCalled();
  });

  it("doesn't call up function on p1 object when p1Up is false", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 65 }, false);
    spyOn(p1, "up");
    controls.controlUpdate(p1, p2);
    expect(p1.up).not.toHaveBeenCalled();
  });

  it("calls up function on p1 object when p1Downis true", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 90 }, true);
    spyOn(p1, "down");
    controls.controlUpdate(p1, p2);
    expect(p1.down).toHaveBeenCalled();
  });

  it("doesn't call up function on p1 object when p1Down is false", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 90 }, false);
    spyOn(p1, "down");
    controls.controlUpdate(p1, p2);
    expect(p1.down).not.toHaveBeenCalled();
  });

  it("calls up function on p2 object when p2Up is true", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 75 }, true);
    spyOn(p2, "up");
    controls.controlUpdate(p1, p2);
    expect(p2.up).toHaveBeenCalled();
  });

  it("doesn't call up function on p2 object when p2Up is false", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 75 }, false);
    spyOn(p2, "up");
    controls.controlUpdate(p1, p2);
    expect(p2.up).not.toHaveBeenCalled();
  });

  it("calls up function on p2 object when p2Downis true", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 77 }, true);
    spyOn(p2, "down");
    controls.controlUpdate(p1, p2);
    expect(p2.down).toHaveBeenCalled();
  });

  it("doesn't call up function on p2 object when p2Down is false", () => {
    const controls = new Controls();
    controls.keyPress({ keyCode: 77 }, false);
    spyOn(p2, "down");
    controls.controlUpdate(p1, p2);
    expect(p2.down).not.toHaveBeenCalled();
  });
});
