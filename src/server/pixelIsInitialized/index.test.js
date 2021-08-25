const pixelIsInitialized = require("./index.js");


beforeEach(() => {
  jest.resetAllMocks();
  global.fbq = jest.fn(() => {});
  global.fbq.getState = () => {
    return {
      pixels: [],
    };
  };
});


describe("pixelIsInitialized", () => {
  it("returns false if fbq null", async() => {
    global.fbq = undefined;
    let value = pixelIsInitialized("testid");
    expect(value).toEqual(false);
  });

  it("returns false if fbq.getState null", async() => {
    global.fbq = {
      getState: null,
    };
    let value = pixelIsInitialized("testid");
    expect(value).toEqual(false);
  });

  it("returns false if the pixel is not present", async() => {
    let value = pixelIsInitialized("testid");
    expect(value).toEqual(false);
  });

  it("returns true if the pixel is present", async() => {
    global.fbq.getState = () => {
      return {
        pixels: [
          {
            id: "testid",
          },
        ],
      };
    };
    let value = pixelIsInitialized("testid");
    expect(value).toEqual(true);
  });
});
