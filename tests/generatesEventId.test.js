const tmp = require("server/deviatetracking.js");
const mockRandomForEach = require("jest-mock-random").mockRandomForEach;



describe("event id generation", () => {
  mockRandomForEach(0.9576231442354);

  it("should not generate an event id if one", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.DeduplicationEventID = "acustomeventid";

    return tmp.fireDeviateTracking(global.data)
      .then(() => {
        expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({event_id: "acustomeventid"}));
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"event_id\":")));
        expect(data.gtmOnSuccess).toHaveBeenCalled();
        expect(data.gtmOnFailure).not.toHaveBeenCalled();
      });
  });

  it("should generate an event id if none is provided", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    delete data.DeduplicationEventID;

    return tmp.fireDeviateTracking(global.data)
      .then(() => {
        expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({event_id: "ffffffff-ffff-4fff-bfff-ffffffffffff"}));
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"event_id\":")));
        expect(data.gtmOnSuccess).toHaveBeenCalled();
        expect(data.gtmOnFailure).not.toHaveBeenCalled();
      });
  });

  it("should generate an event id if it's set to 'None'", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.DeduplicationEventID = "None";

    return tmp.fireDeviateTracking(global.data)
      .then(() => {
        expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({event_id: "ffffffff-ffff-4fff-bfff-ffffffffffff"}));
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"event_id\":")));
        expect(data.gtmOnSuccess).toHaveBeenCalled();
        expect(data.gtmOnFailure).not.toHaveBeenCalled();
      });
  });

  it("should generate an event id if it's set to 'Automatic'", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.DeduplicationEventID = "Automatic";

    return tmp.fireDeviateTracking(global.data)
      .then(() => {
        expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({event_id: "ffffffff-ffff-4fff-bfff-ffffffffffff"}));
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"event_id\":")));
        expect(data.gtmOnSuccess).toHaveBeenCalled();
        expect(data.gtmOnFailure).not.toHaveBeenCalled();
      });
  });
});
