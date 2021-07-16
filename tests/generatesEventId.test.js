const tmp = require("server/deviatetracking.js");
const mockRandomForEach = require("jest-mock-random").mockRandomForEach;



describe("event id generation", () => {
  mockRandomForEach(0.9576231442354);

  it("should not generate an event id if one is provided", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.eventId = "acustomeventid";

    return tmp.fireDeviateTracking(global.data)
      .then(() => {
        expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.anything(), expect.objectContaining({eventID: "acustomeventid"}));
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching("\"eventId\":"));
      });
  });

  it("should generate an event id if none is provided", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    delete data.eventId;

    return tmp.fireDeviateTracking(global.data)
      .then(() => {
        expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.anything(), expect.objectContaining({eventID: "ffffffff-ffff-4fff-bfff-ffffffffffff"}));
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching("\"eventId\":"));
      });
  });

  it("should generate an event id if it's set to 'None'", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.eventId = "None";

    return tmp.fireDeviateTracking(global.data)
      .then(() => {
        expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.anything(), expect.objectContaining({eventID: "ffffffff-ffff-4fff-bfff-ffffffffffff"}));
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching("\"eventId\":"));
      });
  });

  it("should generate an event id if it's set to 'Automatic'", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.eventId = "Automatic";

    return tmp.fireDeviateTracking(global.data)
      .then(() => {
        expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.anything(), expect.objectContaining({eventID: "ffffffff-ffff-4fff-bfff-ffffffffffff"}));
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching("\"eventId\":"));
      });
  });
});
