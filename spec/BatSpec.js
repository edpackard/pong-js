"use strict";

describe("Bat", function () {
  it("generates starting coordinates", function () {
    const newBat = new Bat(1000);
    expect(newBat.x).toEqual(0);
    expect(newBat.y).toEqual(450);
  });
});
