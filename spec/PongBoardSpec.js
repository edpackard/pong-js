describe("PongBoard", function () {
  it("initialises with default values", function () {
    const board = new PongBoard();
    expect(board.height).toEqual(400);
    expect(board.width).toEqual(750);
    expect(board.windowPercentage).toEqual(0.8);
    expect(board.maxMultiplier).toEqual(20);
  });

  it("can accept custom values", function () {
    const board = new PongBoard(200, 200, 0.5, 10);
    expect(board.height).toEqual(200);
    expect(board.width).toEqual(200);
    expect(board.windowPercentage).toEqual(0.5);
    expect(board.maxMultiplier).toEqual(10);
  });
});
