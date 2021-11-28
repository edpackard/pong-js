"use strict";

describe("Bat", function () {
  it("generates starting coordinates when Board height is 1000", function () {
    const newBat = new Bat(1000);
    expect(newBat.x).toEqual(0);
    expect(newBat.y).toEqual(450);
  });

  it("generates starting coordinates when Board height is 2500", function () {
    const newBat = new Bat(2500);
    expect(newBat.x).toEqual(0);
    expect(newBat.y).toEqual(1200);
  });

  it("creates default bat size of 20 x 100", function () {
    const newBat = new Bat(400);
    expect(newBat.width).toEqual(20);
    expect(newBat.height).toEqual(100);
  });

  it("will throw an error if Board height too small", function () {
    expect(() => {
      new Bat(99);
    }).toThrow("Board size is too small");
  });

  it("y coordinate is reduced by 5 by up function", function () {
    const newBat = new Bat(500);
    const movedY = newBat.y - 5;
    newBat.up();
    expect(newBat.y).toEqual(movedY);
  });

  it("y coordinate is increased by 5 by up function", function () {
    const newBat = new Bat(500);
    const movedY = newBat.y + 5;
    newBat.down();
    expect(newBat.y).toEqual(movedY);
  });

  it("y coordinate cannot go below 0", function () {
    const newBat = new Bat(102);
    newBat.up();
    expect(newBat.y).toEqual(0);
  });
});
