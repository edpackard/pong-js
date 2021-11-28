describe("ScaleCanvas", function () {
  let ctx = {
    canvas: {
      style: {
        width: null,
        height: null,
      },
    },
  };
  let cWindow;

  it("scales x2 if window x2 and windowPercentage is 1", function () {
    const scaled = new ScaleCanvas(400, 400, 20, 1);
    cWindow = {
      innerWidth: 800,
      innerHeight: 800,
    };
    scaled.resize(ctx, cWindow);
    expect(ctx.canvas.style.height).toEqual("800px");
    expect(ctx.canvas.style.width).toEqual("800px");
  });

  it("scales x2 if window x4 and windowPercentage is 0.5", function () {
    const scaled = new ScaleCanvas(400, 400, 20, 0.5);
    cWindow = {
      innerWidth: 1600,
      innerHeight: 1600,
    };
    scaled.resize(ctx, cWindow);
    expect(ctx.canvas.style.height).toEqual("800px");
    expect(ctx.canvas.style.width).toEqual("800px");
  });

  it("does not scale if maxMultiplier set to 1", function () {
    const scaled = new ScaleCanvas(500, 500, 1, 0.5);
    cWindow = {
      innerWidth: 1600,
      innerHeight: 1600,
    };
    scaled.resize(ctx, cWindow);
    expect(ctx.canvas.style.height).toEqual("500px");
    expect(ctx.canvas.style.width).toEqual("500px");
  });

  it("does not scale beyond maxMultiplier", function () {
    const scaled = new ScaleCanvas(250, 250, 10, 1);
    cWindow = {
      innerWidth: 2750,
      innerHeight: 2750,
    };
    scaled.resize(ctx, cWindow);
    expect(ctx.canvas.style.height).toEqual("2500px");
    expect(ctx.canvas.style.width).toEqual("2500px");
  });

  it("will scale to width if window too high", function () {
    const scaled = new ScaleCanvas(400, 400, 10, 1);
    cWindow = {
      innerWidth: 500,
      innerHeight: 600,
    };
    scaled.resize(ctx, cWindow);
    expect(ctx.canvas.style.height).toEqual("500px");
    expect(ctx.canvas.style.width).toEqual("500px");
  });

  it("will scale to height if window too wide", function () {
    const scaled = new ScaleCanvas(500, 500, 10, 1);
    cWindow = {
      innerWidth: 700,
      innerHeight: 600,
    };
    scaled.resize(ctx, cWindow);
    expect(ctx.canvas.style.height).toEqual("600px");
    expect(ctx.canvas.style.width).toEqual("600px");
  });

  it("preserves ratio while scaling", function () {
    const scaled = new ScaleCanvas(800, 600, 10, 1);
    cWindow = {
      innerWidth: 1000,
      innerHeight: 1000,
    };
    scaled.resize(ctx, cWindow);
    expect(ctx.canvas.style.height).toEqual("1000px");
    expect(ctx.canvas.style.width).toEqual("750px");
  });
});
