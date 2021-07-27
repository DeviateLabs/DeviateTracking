jest.mock("../injectPixel/index.js");
jest.mock("../initPixel/index.js");

const setupPixel = require("./index.js");
const injectPixel = require("../injectPixel/index.js");
const initPixel = require("../initPixel/index.js");


beforeEach(() => {
  jest.resetAllMocks();
  global.fbq = null;

  console.log = jest.fn(() => {});

  injectPixel.mockImplementation(() => {
    global.fbq = jest.fn(() => {});
  });
  initPixel.mockImplementation(() => {});
});


describe("setupPixel", () => {
  it("calls injectPixel", async() => {
    setupPixel({});
    expect(injectPixel).toHaveBeenCalled();
  });

  it("does not call injectPixel if fbq defined", async() => {
    global.fbq = jest.fn(() => {});
    setupPixel({});
    expect(injectPixel).not.toHaveBeenCalled();
  });

  it("calls initPixel", async() => {
    setupPixel({});
    expect(initPixel).toHaveBeenCalled();
  });

  it("calls initPixel with data", async() => {
    setupPixel({key: "value"});
    expect(initPixel).toHaveBeenCalledWith(expect.objectContaining({key: "value"}));
  });

  it("does not call initPixel if fbq defined", async() => {
    global.fbq = jest.fn(() => {});
    setupPixel({});
    expect(initPixel).not.toHaveBeenCalled();
  });

  it("logs a notification", async() => {
    setupPixel({});
    expect(console.log).toHaveBeenCalledWith("Deviate Tracking pixel injected");
  });

  it("does not log a notification if fbq defined", async() => {
    global.fbq = jest.fn(() => {});
    setupPixel({});
    expect(console.log).not.toHaveBeenCalled();
  });
});
