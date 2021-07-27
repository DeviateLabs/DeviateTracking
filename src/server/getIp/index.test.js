const getIp = require("./index.js");



beforeEach(() => {
  jest.resetAllMocks();
  global.fetch = jest.fn(async(test) => {
    return {
      json: () => {
        return { ip: "mocked-ip" };
      },
      ok: true,
    };
  });
  global.window = {};
});


describe("getIp", () => {
  it("should get the ip and store it in window", async() => {
    await getIp();
    expect(global.window).toEqual(expect.objectContaining({ip: "mocked-ip"}));
  });

  it("should return the ip if window already has one", async() => {
    global.window.ip = "other-mocked-ip";
    let result = await getIp();
    expect(result).toEqual("other-mocked-ip");
  });
});
