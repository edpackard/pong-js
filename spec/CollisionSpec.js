describe("Collision", function () {
  it("detects same Y plane: right to left collision", function () {
    const obj1 = { x: 10, y: 10, height: 10, width: 10 };
    const obj2 = { x: 20, y: 10, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(true);
  });

  it("detects same Y plane: non-collision", function () {
    const obj1 = { x: 10, y: 10, height: 10, width: 10 };
    const obj2 = { x: 21, y: 10, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(false);
  });
});
