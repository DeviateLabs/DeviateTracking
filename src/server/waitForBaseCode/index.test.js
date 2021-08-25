const waitForBaseCode = require("./index.js");

beforeEach(() => {
  jest.resetAllMocks();
  global.fbq = undefined;
});


describe("waitForBaseCode", () => {
  it("waits if fbq undefined", async() => {
    jest.useFakeTimers();

    global.fbq = undefined;
    let result = null;
    let promise = waitForBaseCode().then((data) => {
      result = data;
    });

    expect(result).toEqual(null);

    global.fbq = jest.fn(() => {});
    jest.advanceTimersByTime(1000);
    await Promise.all([promise]);
    expect(result).toEqual(true);
  });

  it("does not wait if fbq defined", async() => {
    jest.useFakeTimers();

    global.fbq = jest.fn(() => {});
    let result = null;
    await waitForBaseCode().then((data) => {
      result = data;
    });

    expect(result).toEqual(true);
  });
});
