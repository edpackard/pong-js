describe("Collision", function () {
  it("detects same Y plane: collision", function () {
    const obj1 = { x: 10, y: 10, height: 10, width: 10 };
    const obj2 = { x: 20, y: 10, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(true);
  });

  it("detects same Y plane: non-collision: obj2 high x", function () {
    const obj1 = { x: 10, y: 14, height: 10, width: 10 };
    const obj2 = { x: 21, y: 14, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(false);
  });

  it("detects same Y plane: non-collision: obj2 low x", function () {
    const obj1 = { x: 21, y: 25, height: 10, width: 10 };
    const obj2 = { x: 10, y: 25, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(false);
  });

  // it("detects diff Y plane: non-collision", function () {
  //   const obj1 = { x: 10, y: 10, height: 10, width: 10 };
  //   const obj2 = { x: 10, y: 25, height: 10, width: 10 };
  //   collision = new Collision();
  //   expect(collision.isColliding(obj1, obj2)).toBe(false);
  // });
});
