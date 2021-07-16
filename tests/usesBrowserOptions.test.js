const tmp = require("server/deviatetracking.js");

it("should send a browser event if the box is ticked", async() => {
  data.sendBrowserEvent = true;
  return tmp.fireDeviateTracking(global.data)
    .then(() => {
      expect(global.fbq).toHaveBeenCalled();
    });
});

it("should not send a browser event if the box is unticked", async() => {
  data.sendBrowserEvent = false;
  return tmp.fireDeviateTracking(global.data)
    .then(() => {
      expect(global.fbq).not.toHaveBeenCalled();
    });
});
