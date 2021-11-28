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
});
