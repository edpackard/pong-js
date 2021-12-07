describe("Collision", function () {
  it("detects same Y plane: collision on X plane: obj2 high x", function () {
    const obj1 = { x: 10, y: 10, height: 10, width: 10 };
    const obj2 = { x: 20, y: 10, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(true);
  });

  it("detects same Y plane: collision on X plane: obj2 low x", function () {
    const obj1 = { x: 20, y: 10, height: 10, width: 10 };
    const obj2 = { x: 10, y: 10, height: 10, width: 10 };
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

  it("detects same X plane: non-collision: obj2 low y", function () {
    const obj1 = { x: 50, y: 21, height: 10, width: 10 };
    const obj2 = { x: 50, y: 10, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(false);
  });

  it("detects same X plane: non-collision: obj2 high y", function () {
    const obj1 = { x: 99, y: 10, height: 10, width: 10 };
    const obj2 = { x: 99, y: 25, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(false);
  });

  it("detects same X plane: collision on Y plane: obj2 high y", function () {
    const obj1 = { x: 10, y: 10, height: 10, width: 10 };
    const obj2 = { x: 10, y: 20, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(true);
  });

  it("detects same X plane: collision on Y plane: obj2 low y", function () {
    const obj1 = { x: 10, y: 20, height: 10, width: 10 };
    const obj2 = { x: 10, y: 10, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.isColliding(obj1, obj2)).toBe(true);
  });
});
