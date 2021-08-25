jest.mock("../pixelIsInitialized/index.js");

const waitForPixelInit = require("./index.js");
const pixelIsInitialized = require("../pixelIsInitialized/index.js");

beforeEach(() => {
  jest.resetAllMocks();
  global.fbq = undefined;
});

function setFbqWithPixel(){
  global.fbq = {
    getState: () => {
      return {
        pixels: [
          {
            id: "pixelid",
          },
        ],
      };
    },
  };

  pixelIsInitialized.mockImplementation(() => {
    return true;
  });
}

function setFbqWithoutPixel(){
  global.fbq = {
    getState: () => {
      return {
        pixels: [],
      };
    },
  };
}

describe("waitForPixelInit", () => {
  it("waits if pixel not initialized", async() => {
    jest.useFakeTimers();

    pixelIsInitialized.mockImplementation(() => {
      return false;
    });

    let result = null;
    let promise = waitForPixelInit("pixelid").then((data) => {
      result = data;
    });

    expect(result).toEqual(null);


    pixelIsInitialized.mockImplementation(() => {
      return true;
    });

    jest.advanceTimersByTime(1000);
    await Promise.all([promise]);
    expect(result).toEqual(true);
  });

  it("does not wait if pixel initialized", async() => {
    jest.useFakeTimers();

    pixelIsInitialized.mockImplementation(() => {
      return true;
    });

    let result = null;
    await waitForPixelInit("pixelid").then((data) => {
      result = data;
    });

    expect(result).toEqual(true);
  });
});
