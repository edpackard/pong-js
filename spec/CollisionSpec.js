describe("Collision", function () {
  it("detects a right to left collision", function () {
    const obj1 = { x: 10, y: 10, height: 10, width: 10 };
    const obj2 = { x: 20, y: 10, height: 10, width: 10 };
    collision = new Collision();
    expect(collision.collisionCheck(obj1, obj2)).toBe(true);
  });
});
