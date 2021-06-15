const tmp = require("server/deviatetracking.js");


describe("validateKey", () => {
  it("handles fetch throwing an error", async() => {
    data.apiAccessToken = "blah";
    data.LicensedEmail = "deviatetracking@gmail.com";
    global.fetch = jest.fn(() => {
      return Promise.reject(new Error("cryptic error"));
    });
    return expect(tmp.validateKey(global.data)).rejects.toEqual(new Error("cryptic error"));
  });
});
