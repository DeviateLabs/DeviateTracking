const sendServerEvent = require("./index.js");


beforeEach(() => {
  jest.resetAllMocks();
  global.fetch = jest.fn();
});


describe("sendServerEvent", () => {
  it("calls fetch", async() => {
    sendServerEvent({});
    expect(global.fetch).toHaveBeenCalled();
  });

  it("calls fetch with api v5", async() => {
    sendServerEvent({});
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(/.*v5.api.*/));
  });

  it("uses https", async() => {
    sendServerEvent({});
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(/https:.*/));
  });

  it("uses the /capi route", async() => {
    sendServerEvent({});
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(/\/capi*/));
  });

  it("sends the data query arg", async() => {
    sendServerEvent({testkey: "testval"});
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(/data={\"testkey\":\"testval\"}/));
  });
});
