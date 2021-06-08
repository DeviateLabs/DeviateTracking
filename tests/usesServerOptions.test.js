const tmp = require("server/deviatetracking.js");


it("should send a server event if the box is ticked", async() => {
  data.sendServerEvent = true;
  return tmp.fireDeviateTracking(global.data)
    .then(() => {
      expect(global.fetch).toHaveBeenCalledTimes(2);
      expect(data.gtmOnSuccess).toHaveBeenCalled();
      expect(data.gtmOnFailure).not.toHaveBeenCalled();
    });
});

it("should not send a server event if the box is unticked", async() => {
  data.sendServerEvent = false;
  return tmp.fireDeviateTracking(global.data)
    .then(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(data.gtmOnSuccess).toHaveBeenCalled();
      expect(data.gtmOnFailure).not.toHaveBeenCalled();
    });
});
