jest.mock("../extractFbqProps/index.js");

const sendBrowserEvent = require("./index.js");
const extractFbqProps = require("../extractFbqProps/index.js");


beforeEach(() => {
  jest.resetAllMocks();
  global.fbq = jest.fn(() => {});

  extractFbqProps.mockImplementation(() => {
    return {
      key: "value",
    };
  });
});

describe("sendBrowserEvent", () => {
  it("calls fbq", async() => {
    sendBrowserEvent({});
    expect(global.fbq).toHaveBeenCalled();
  });

  it("calls fbq with first arg = 'track'", async() => {
    sendBrowserEvent({
      eventName: "test-name",
      eventId: "test-id",
    });
    expect(global.fbq).toHaveBeenCalledWith("track", expect.anything(), expect.anything(), expect.anything());
  });

  it("calls fbq with event name as the second arg", async() => {
    sendBrowserEvent({
      eventName: "test-name",
      eventId: "test-id",
    });
    expect(global.fbq).toHaveBeenCalledWith(expect.anything(), "test-name", expect.anything(), expect.anything());
  });

  it("calls fbq with data in the third arg", async() => {
    sendBrowserEvent({
      eventName: "test-name",
      eventId: "test-id",
    });
    expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), {"key": "value"}, expect.anything());
  });

  it("calls fbq with event id in the fourth arg", async() => {
    sendBrowserEvent({
      eventName: "test-name",
      eventId: "test-id",
    });
    expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.anything(), expect.objectContaining({eventID: "test-id"}));
  });
});
