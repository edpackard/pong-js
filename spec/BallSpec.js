"use strict";

describe("Ball", function () {
  it("has default size of 20 x 20", function () {
    const newBall = new Ball();
    expect(newBall.size).toEqual(20);
  });

  it("has starting coordinates in middle of board", function () {
    const newBall = new Ball(1000, 1000);
    expect(newBall.x).toEqual(490);
    expect(newBall.y).toEqual(490);
  });
});
