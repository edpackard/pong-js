"use strict";

describe("Ball", function () {
  it("has default size of 20 x 20", function () {
    const newBall = new Ball();
    expect(newBall.height).toEqual(20);
    expect(newBall.width).toEqual(20);
  });

  it("can set different size", function () {
    const newBall = new Ball(1000, 1000, 10);
    expect(newBall.height).toEqual(10);
    expect(newBall.width).toEqual(10);
  });

  it("has default direction vectors of 0", function () {
    const newBall = new Ball();
    expect(newBall.dx).toEqual(0);
    expect(newBall.dy).toEqual(0);
  });

  it("has starting speed of 5", function () {
    const newBall = new Ball();
    expect(newBall.speed).toEqual(5);
  });

  it("has starting coordinates in middle of board", function () {
    const newBall = new Ball(1000, 1000);
    expect(newBall.x).toEqual(490);
    expect(newBall.y).toEqual(490);
  });

  it("can move left", function () {
    const newBall = new Ball(200, 400);
    newBall.left();
    expect(newBall.dx).toEqual(-1);
  });

  it("can move right", function () {
    const newBall = new Ball(200, 400);
    newBall.right();
    expect(newBall.dx).toEqual(1);
  });

  it("updates x position based on direction (l) and speed", function () {
    const newBall = new Ball(200, 400);
    newBall.right();
    newBall.updatePos();
    expect(newBall.x).toEqual(195);
  });

  it("updates x position based on direction (r) and speed", function () {
    const newBall = new Ball(200, 400);
    newBall.left();
    newBall.updatePos();
    expect(newBall.x).toEqual(185);
  });

  it("updates y position based on direction (up) and speed", function () {
    const newBall = new Ball(200, 400);
    newBall.up();
    newBall.updatePos();
    expect(newBall.y).toEqual(85);
  });

  it("updates y position based on direction (down) and speed", function () {
    const newBall = new Ball(200, 400);
    newBall.down();
    newBall.updatePos();
    expect(newBall.y).toEqual(95);
  });

  it("normalises vectors (1, 1)", function () {
    const newBall = new Ball(200, 400);
    newBall.right();
    newBall.down();
    newBall.updatePos();
    expect(newBall.dx).toEqual(0.7071067811865475);
    expect(newBall.dy).toEqual(0.7071067811865475);
  });

  it("normalises vectors (-1, -1)", function () {
    const newBall = new Ball(200, 400);
    newBall.left();
    newBall.up();
    newBall.updatePos();
    expect(newBall.dx).toEqual(-0.7071067811865475);
    expect(newBall.dy).toEqual(-0.7071067811865475);
  });

  it("reverses y vector if it hits top boundary", function () {
    const newBall = new Ball(30, 200);
    newBall.left();
    newBall.up();
    newBall.updatePos();
    expect(newBall.dy).toBeLessThan(0);
    newBall.updatePos();
    expect(newBall.dy).toBeGreaterThan(0);
  });

  it("reverses y vector if it hits bottom boundary", function () {
    const newBall = new Ball(30, 200);
    newBall.right();
    newBall.down();
    newBall.updatePos();
    expect(newBall.dy).toBeGreaterThan(0);
    newBall.updatePos();
    expect(newBall.dy).toBeLessThan(0);
  });
});
