jest.mock("../processData/index.js");
jest.mock("../setupPixel/index.js");
jest.mock("../sendServerEvent/index.js");
jest.mock("../sendBrowserEvent/index.js");
jest.mock("../hashData/index.js");

const processData = require("../processData/index.js");
const setupPixel = require("../setupPixel/index.js");
const sendServerEvent = require("../sendServerEvent/index.js");
const sendBrowserEvent = require("../sendBrowserEvent/index.js");
const hashData = require("../hashData/index.js");
const fireDeviateTracking = require("../fireDeviateTracking/index.js");

beforeEach(() => {
  jest.resetAllMocks();

  global.window = {
    location: {
      href: "192.168.192.168",
    },
  };
  processData.mockImplementation(() => {});
  setupPixel.mockImplementation(() => {});
  sendServerEvent.mockImplementation(() => {});
  sendBrowserEvent.mockImplementation(() => {});
  hashData.mockImplementation(() => {});
});

describe("fireDeviateTracking", () => {
  it("does nothing if called from gtm's malware scanner", async() => {
    global.window.location.href = "appspot.com";
    await fireDeviateTracking({
      sendBrowserEvent: true,
      sendServerEvent: true,
    });
    expect(processData).not.toHaveBeenCalled();
    expect(setupPixel).not.toHaveBeenCalled();
    expect(sendServerEvent).not.toHaveBeenCalled();
    expect(sendBrowserEvent).not.toHaveBeenCalled();
    expect(hashData).not.toHaveBeenCalled();
  });

  it("calls processData", async() => {
    await fireDeviateTracking({key: "value"});
    expect(processData).toHaveBeenCalledWith({key: "value"});
  });

  it("sends a server event", async() => {
    let data = {
      sendServerEvent: true,
      key: "value",
    };
    await fireDeviateTracking(data);
    expect(sendServerEvent).toHaveBeenCalledWith(data);
  });

  it("does not send a server event if !sendServerEvent", async() => {
    let data = {
      sendServerEvent: false,
      key: "value",
    };
    await fireDeviateTracking(data);
    expect(sendServerEvent).not.toHaveBeenCalled();
  });

  it("hashes user data", async() => {
    let data = {
      sendBrowserEvent: true,
      key: "value",
    };
    await fireDeviateTracking(data);
    expect(hashData).toHaveBeenCalledWith(data);
  });

  it("sends a browser event", async() => {
    let data = {
      sendBrowserEvent: true,
      key: "value",
    };
    await fireDeviateTracking(data);
    expect(sendBrowserEvent).toHaveBeenCalledWith(data);
  });

  it("does not send a browser event if !sendBrowserEvent", async() => {
    let data = {
      sendBrowserEvent: false,
      key: "value",
    };
    await fireDeviateTracking(data);
    expect(sendBrowserEvent).not.toHaveBeenCalled();
  });

  it("sets up the pixel", async() => {
    let data = {
      sendBrowserEvent: true,
      key: "value",
    };
    await fireDeviateTracking(data);
    expect(setupPixel).toHaveBeenCalledWith(data);
  });


  it("hashes before setting up the pixel", async() => {
    let data = {
      sendBrowserEvent: true,
      key: "value",
      userData: {
        externalId: "abcdef"
      }
    };

    hashData.mockImplementation((data) => {
      data.userData.externalId = "bef57ec7f53a6d40beb640a780a639c83bc29ac8a9816f1fc6c5c6dcd93c4721"
    });

    await fireDeviateTracking(data);
    expect(setupPixel).toHaveBeenCalledWith({...data, userData:{externalId:"bef57ec7f53a6d40beb640a780a639c83bc29ac8a9816f1fc6c5c6dcd93c4721"}});
  });
});
