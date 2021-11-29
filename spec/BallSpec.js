"use strict";

describe("Ball", function () {
  it("has default size of 20 x 20", function () {
    const newBall = new Ball();
    expect(newBall.size).toEqual(20);
  });

  it("has starting speed of 5", function () {
    const newBall = new Ball();
    expect(newBall.size).toEqual(20);
  });

  it("has starting coordinates in middle of board", function () {
    const newBall = new Ball(1000, 1000);
    expect(newBall.x).toEqual(490);
    expect(newBall.y).toEqual(490);
  });

  it("can move left", function () {
    const newBall = new Ball(200, 400);
    newBall.left();
    expect(newBall.x).toEqual(185);
  });
});
