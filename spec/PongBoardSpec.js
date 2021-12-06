describe("PongBoard", function () {
  it("initialises with default values", function () {
    const board = new PongBoard();
    expect(board.gameHeight).toEqual(400);
    expect(board.headHeight).toEqual(200);
    expect(board.height).toEqual(600);
    expect(board.width).toEqual(750);
    expect(board.windowPercentage).toEqual(0.8);
    expect(board.maxMultiplier).toEqual(20);
  });

  it("can accept custom values", function () {
    const board = new PongBoard(200, 200, 200, 0.5, 10);
    expect(board.gameHeight).toEqual(200);
    expect(board.headHeight).toEqual(200);
    expect(board.height).toEqual(400);
    expect(board.width).toEqual(200);
    expect(board.windowPercentage).toEqual(0.5);
    expect(board.maxMultiplier).toEqual(10);
  });

  it("can convert y values to header values", function () {
    const board = new PongBoard();
    expect(board.headerY(0)).toEqual(401);
    expect(board.headerY(50)).toEqual(451);
    expect(board.headerY(199)).toEqual(600);
  });
});
