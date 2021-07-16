const tmp = require("server/deviatetracking.js");
const mockRandomForEach = require("jest-mock-random").mockRandomForEach;



describe("facebook pixel injection", () => {
  mockRandomForEach(0.9576231442354);

  it("injects a pixel", async() => {
    global.fbq = undefined;
    global.data.DeduplicationEventId = "fakeeventid";
    global.document.getElementsByTagName = jest.fn(() => {
      return [
        {
          parentNode: {
            insertBefore: jest.fn(() => {
              global.fbq = jest.fn(() => {});
            }),
          },
        },
      ];
    });

    await tmp.fireDeviateTracking(global.data);

    expect(global.fbq).toHaveBeenCalledWith("init", expect.anything());
  });

  it("does not inject a pixel if one exists", async() => {
    global.data.DeduplicationEventId = "fakeeventid";
    global.document.getElementsByTagName = jest.fn(() => {
      return [
        {
          parentNode: {
            insertBefore: jest.fn(() => {
              global.fbq = jest.fn(() => {});
            }),
          },
        },
      ];
    });

    await tmp.fireDeviateTracking(global.data);

    expect(global.fbq).not.toHaveBeenCalledWith("init", expect.anything());
  });

  it("does not fire a pageview event upon pixel injection", async() => {
    global.data.eventId = "fakeeventid";
    global.fbq = undefined;
    global.document.getElementsByTagName = jest.fn(() => {
      return [
        {
          parentNode: {
            insertBefore: jest.fn(() => {
              global.fbq = jest.fn(() => {});
            }),
          },
        },
      ];
    });

    await tmp.fireDeviateTracking(global.data);

    expect(global.fbq).not.toHaveBeenCalledWith("track", "PageView", expect.anything(), expect.anything());
  });

  it("injection pageview has an id", async() => {
    global.data.eventId = "fakeeventid";
    global.data.eventName = "PageView";
    global.fbq = undefined;
    global.document.getElementsByTagName = jest.fn(() => {
      return [
        {
          parentNode: {
            insertBefore: jest.fn(() => {
              global.fbq = jest.fn(() => {});
            }),
          },
        },
      ];
    });

    await tmp.fireDeviateTracking(global.data);

    expect(global.fbq).toHaveBeenCalledWith("track", "PageView", expect.anything(), expect.objectContaining({eventID: "fakeeventid"}));
  });

  it("does not fire injection pageview if event type is pageview", async() => {
    global.data.eventId = "fakeeventid";
    global.data.eventName = "PageView";
    global.fbq = undefined;
    global.document.getElementsByTagName = jest.fn(() => {
      return [
        {
          parentNode: {
            insertBefore: jest.fn(() => {
              global.fbq = jest.fn(() => {});
            }),
          },
        },
      ];
    });

    await tmp.fireDeviateTracking(global.data);

    expect(global.fbq).toHaveBeenCalledTimes(2);
    expect(global.fbq).toHaveBeenCalledWith("track", "PageView", expect.anything(), expect.objectContaining({eventID: expect.anything()}));
  });

  it("uses data.eventId if event type is pageview", async() => {
    global.data.eventId = "fakeeventid";
    global.data.eventName = "PageView";
    global.fbq = undefined;
    global.document.getElementsByTagName = jest.fn(() => {
      return [
        {
          parentNode: {
            insertBefore: jest.fn(() => {
              global.fbq = jest.fn(() => {});
            }),
          },
        },
      ];
    });

    await tmp.fireDeviateTracking(global.data);

    expect(global.fbq).toHaveBeenCalledTimes(2);
    expect(global.fbq).toHaveBeenCalledWith("track", "PageView", expect.anything(), expect.objectContaining({eventID: "fakeeventid"}));
  });

  it("does not send a pageview event if event type is not pageview", async() => {
    global.data.eventId = "fakeeventid";
    global.data.eventName = "Donate";
    global.fbq = undefined;
    global.document.getElementsByTagName = jest.fn(() => {
      return [
        {
          parentNode: {
            insertBefore: jest.fn(() => {
              global.fbq = jest.fn(() => {});
            }),
          },
        },
      ];
    });

    await tmp.fireDeviateTracking(global.data);

    expect(global.fbq).not.toHaveBeenCalledWith("track", "PageView", expect.anything(), expect.anything());
  });
});
