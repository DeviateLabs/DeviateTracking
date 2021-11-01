jest.mock("../getIp/index.js");
jest.mock("../convertFalsies/index.js");
jest.mock("../uuidv4/index.js");
jest.mock("../setFbCookies/index.js");
jest.mock("../getQueryArg/index.js");

const processData = require("./index.js");
const getIp = require("../getIp/index.js");
const convertFalsies = require("../convertFalsies/index.js");
const uuidv4 = require("../uuidv4/index.js");
const setFbCookies = require("../setFbCookies/index.js");
const getQueryArg = require("../getQueryArg/index.js");


beforeEach(() => {
  jest.resetAllMocks();
  global.window = {
    navigator: {
      userAgent: "fake-user-agent",
    },
    location: {
      href: "fake-href",
    },
  };

  global.fbq = jest.fn(() => {});

  convertFalsies.mockImplementation((data) => {
    return data;
  });

  getIp.mockImplementation(() => {
    global.window.ip = "192.168.192.168";
    return "192.168.192.168";
  });

  uuidv4.mockImplementation(() => {
    return "fake-guid";
  });

  setFbCookies.mockImplementation(() => {
    return "fake-guid";
  });

  getQueryArg.mockImplementation(() => {
    return null;
  });
});


describe("processData", () => {
  it("should add a userData key if none exists", async() => {
    let data = {};
    await processData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.anything()}));
  });
  it("should not add a userData key if one exists", async() => {
    let data = {
      userData: {
        key: "value",
      },
    };
    await processData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({key: "value"})}));
  });

  it("should add an ip userData key from window.ip", async() => {
    let data = {
      sendIpAddress: true,
    };
    global.window.ip = "192.168.192.168";
    await processData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({"ipAddress": "192.168.192.168"})}));
  });
  it("should not add an ip userData key if !sendIpAddress", async() => {
    let data = {
      sendIpAddress: false,
    };
    global.window.ip = "192.168.192.168";
    await processData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({"ipAddress": "192.168.192.168"})}));
  });

  it("should set userData.userAgent", async() => {
    let data = {};
    await processData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({userAgent: "fake-user-agent"})}));
  });

  it("should set eventSourceUrl", async() => {
    let data = {};
    await processData(data);
    expect(data).toEqual(expect.objectContaining({"eventSourceUrl": "fake-href"}));
  });

  it("should set userData.externalId to user agent + url", async() => {
    let data = {};
    await processData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({externalId: "fake-user-agent192.168.192.168"})}));
  });

  it("does not override userData.externalId", async() => {
    let data = {
      userData: {
        externalId: "value",
      },
    };
    await processData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({externalId: "value"})}));
  });

  it("generates an event id", async() => {
    let data = {};
    await processData(data);
    expect(data).toEqual(expect.objectContaining({"eventId": "fake-guid"}));
  });

  it("does not override the event id", async() => {
    let data = {
      eventId: "fake",
    };
    await processData(data);
    expect(data).toEqual(expect.objectContaining({"eventId": "fake"}));
  });

  it("sets the testCode if it's in the query arg", async() => {
    let data = {};

    getQueryArg.mockImplementation(() => {
      return "TEST12345";
    });

    await processData(data);
    expect(data).toEqual(expect.objectContaining({"testCode": "TEST12345"}));
  });

  it("does not set the testCode if query arg is null", async() => {
    let data = {};

    await processData(data);
    expect(data).not.toEqual(expect.objectContaining({"testCode": expect.anything()}));
  });

  it("sets scriptVersion", async() => {
    let data = {};

    await processData(data);
    expect(data).toEqual(expect.objectContaining({"scriptVersion": expect.anything()}));
  });
});
