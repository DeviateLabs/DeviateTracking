const tmp = require("server/deviatetracking.js");

it("should send a server event if key is valid", async() => {
  data.sendServerEvent = true;
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => {
      return {
        ip: "192.192.192.192",
        success: true,
      };
    },
  }));


  return tmp.fireDeviateTracking(global.data)
    .then(() => {
      expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching("v1.api.deviatetracking.com"));
      expect(data.gtmOnSuccess).toHaveBeenCalled();
      expect(data.gtmOnFailure).not.toHaveBeenCalled();
    });
});

it("should not send a server event if the key is invalid", async() => {
  data.sendServerEvent = false;
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => {
      return {
        ip: "192.192.192.192",
        success: false,
      };
    },
  }));


  return tmp.fireDeviateTracking(global.data)
    .then(() => {
      expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching("v1.api.deviatetracking.com"));
      expect(data.gtmOnSuccess).not.toHaveBeenCalled();
      expect(data.gtmOnFailure).toHaveBeenCalled();
    });
});

