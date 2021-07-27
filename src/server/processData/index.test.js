jest.mock("../getIp/index.js");
jest.mock("../convertDefaults/index.js");
jest.mock("../uuidv4/index.js");

const processData = require("./index.js");
const getIp = require("../getIp/index.js");
const convertDefaults = require("../convertDefaults/index.js");
const uuidv4 = require("../uuidv4/index.js");


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

  convertDefaults.mockImplementation((data) => {
    return data;
  });

  getIp.mockImplementation(() => {
    global.window.ip = "192.168.192.168";
    return "192.168.192.168";
  });

  uuidv4.mockImplementation(() => {
    return "fake-guid";
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
});
