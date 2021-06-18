const tmp = require("server/deviatetracking.js");


it("should generate an event id if none is provided", async() => {
  data.sendServerEvent = true;
  data.sendBrowserEvent = true;
  delete data.DeduplicationEventID;

  return tmp.fireDeviateTracking(global.data)
    .then(() => {
      expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({event_id: expect.anything()}));
      expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"event_id\":")));
      expect(data.gtmOnSuccess).toHaveBeenCalled();
      expect(data.gtmOnFailure).not.toHaveBeenCalled();
    });
});
