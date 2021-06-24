const tmp = require("server/deviatetracking.js");


describe("validateKey", () => {
  it("sends a validation request to the dt server", async() => {
    data.apiAccessToken = "blah";
    data.LicensedEmail = "deviatetracking@gmail.com";

    return tmp.validateKey(global.data)
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching("deviatetracking"));
      });
  });

  it("returns true when given a valid key", async() => {
    data.apiAccessToken = "validkey";
    data.LicensedEmail = "deviatetracking@gmail.com";

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => {
        return {success: true};
      },
    }));

    expect(await tmp.validateKey(global.data)).toBeTruthy();
  });

  it("returns false when given an invalid key", async() => {
    data.apiAccessToken = "invalidkey";
    data.LicensedEmail = "deviatetracking@gmail.com";

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => {
        return {error: "Invalid Request"};
      },
    }));

    expect(await tmp.validateKey(global.data)).toBeFalsy();
  });


  it("urlencodes the licensedemail arg", async() => {
    data.apiAccessToken = "invalidkey";
    data.LicensedEmail = "midnighthaley+1@gmail.com";

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => {
        return {error: "Invalid Request"};
      },
    }));

    return tmp.validateKey(global.data)
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching("midnighthaley%2B1%40gmail.com"));
      });
  });
});
