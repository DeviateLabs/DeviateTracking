jest.mock("../extractFbqProps/index.js");
jest.mock("../waitForPixelInit/index.js");

const sendBrowserEvent = require("./index.js");
const extractFbqProps = require("../extractFbqProps/index.js");
const waitForPixelInit = require("../waitForPixelInit/index.js");


beforeEach(() => {
  jest.resetAllMocks();
  global.fbq = jest.fn(() => {});
  extractFbqProps.mockImplementation(() => {
    return {
      key: "value",
    };
  });

  waitForPixelInit.mockImplementation(async() => {

  });
});

describe("sendBrowserEvent", () => {
  it("calls fbq", async() => {
    await sendBrowserEvent({pixelId: "pixel-id", trackSingle: false});
    expect(global.fbq).toHaveBeenCalled();
  });

  it("calls fbq trackSingle with the correct args", async() => {
    await sendBrowserEvent({
      eventName: "test-name",
      eventId: "test-id",
      trackSingle: true,
      pixelId: "pixel-id",
    });
    expect(global.fbq).toHaveBeenCalledWith("trackSingle", "pixel-id", "test-name", {"key": "value"}, expect.objectContaining({eventID: "test-id"}));
  });

  it("waits for pixel initialization", async() => {
    jest.useFakeTimers();


    waitForPixelInit.mockImplementation(async() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    });

    let promise = sendBrowserEvent({
      eventName: "test-name",
      eventId: "test-id",
      trackSingle: true,
      pixelId: "pixel-id",
    });

    expect(global.fbq).not.toHaveBeenCalled();

    jest.advanceTimersByTime(3000);
    await Promise.all([promise]);
    expect(global.fbq).toHaveBeenCalled();
  });

  it("does not wait for pixel initialization if not needed", async() => {
    await sendBrowserEvent({
      eventName: "test-name",
      eventId: "test-id",
      trackSingle: true,
      pixelId: "pixel-id",
    });

    expect(global.fbq).toHaveBeenCalled();
  });
});
