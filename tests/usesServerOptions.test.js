const tmp = require("server/deviatetracking.js");


it("should send a server event if the box is ticked", async() => {
  data.sendServerEvent = true;
  return tmp.fireDeviateTracking(global.data)
    .then(() => {
      expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching("api.deviatetracking.com"));
    });
});

it("should not send a server event if the box is unticked", async() => {
  data.sendServerEvent = false;
  return tmp.fireDeviateTracking(global.data)
    .then(() => {
      expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching("api.deviatetracking.com"));
    });
});

