jest.mock("./injectBaseCode/index.js");
jest.mock("./initPixel/index.js");
jest.mock("../pixelIsInitialized/index.js");
jest.mock("../waitForPixelInit/index.js");
jest.mock("../waitForBaseCode/index.js");

const setupPixel = require("./index.js");
const injectBaseCode = require("./injectBaseCode/index.js");
const initPixel = require("./initPixel/index.js");
const waitForPixelInit = require("../waitForPixelInit/index.js");
const pixelIsInitialized = require("../pixelIsInitialized/index.js");
const waitForBaseCode = require("../waitForBaseCode/index.js");


beforeEach(() => {
  jest.resetAllMocks();
  global.fbq = null;


  injectBaseCode.mockImplementation(() => {
    global.fbq = jest.fn(() => {});
    global.fbq.getState = () => {
      return {
        pixels: [],
      };
    };
  });
  initPixel.mockImplementation(() => {});

  pixelIsInitialized.mockImplementation(() => {
    return false;
  });


  waitForPixelInit.mockImplementation(async() => {});

  waitForBaseCode.mockImplementation(async() => {});
});


describe("setupPixel", () => {
  it("calls injectBaseCode", async() => {
    await setupPixel({
      injectBaseCode: true,
    });
    expect(injectBaseCode).toHaveBeenCalled();
  });

  it("does not call injectBaseCode if fbq defined", async() => {
    global.fbq = jest.fn(() => {});
    global.fbq.getState = () => {
      return {
        pixels: [],
      };
    };
    await setupPixel({initializePixel: true});
    expect(injectBaseCode).not.toHaveBeenCalled();
  });

  it("calls initPixel", async() => {
    await setupPixel({
      initializePixel: true,
      pixelId: "test",
    });
    expect(initPixel).toHaveBeenCalled();
  });

  it("calls initPixel with data", async() => {
    await setupPixel({key: "value", initializePixel: true});
    expect(initPixel).toHaveBeenCalledWith(expect.objectContaining({key: "value"}));
  });

  it("does not call initPixel if the pixel was already initialized", async() => {
    pixelIsInitialized.mockImplementation(() => {
      return true;
    });
    await setupPixel({pixelId: "pixel-id", initializePixel: true});
    expect(initPixel).not.toHaveBeenCalled();
  });

  it("does not call initPixel if data.initializePixel = false", async() => {
    await setupPixel({pixelId: "pixel-id", initializePixel: false});
    expect(initPixel).not.toHaveBeenCalled();
  });
});
