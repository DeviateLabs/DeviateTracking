const convertFalsies = require("./index.js");

describe("convertFalsies top level", () => {
  it("converts 'Automatic' to null", async() => {
    let data = {key: "Automatic", userData: {}, customData: {}};

    convertFalsies(data);
    expect(data).toEqual(expect.objectContaining({key: null}));
  });
  it("converts 'None' to null", async() => {
    let data = {key: "None", userData: {}, customData: {}};

    convertFalsies(data);
    expect(data).toEqual(expect.objectContaining({key: null}));
  });
  it("converts 'EventId' to null", async() => {
    let data = {key: "None", userData: {}, customData: {}};

    convertFalsies(data);
    expect(data).toEqual(expect.objectContaining({key: null}));
  });
});

describe("convertFalsies userData level", () => {
  it("converts 'Automatic' to null", async() => {
    let data = {userData: {key: "Automatic" }, customData: {}};

    convertFalsies(data);
    expect(data).toEqual(expect.objectContaining({userData: {key: null}}));
  });
  it("converts 'None' to null", async() => {
    let data = { userData: {key: "None" }, customData: {}};

    convertFalsies(data);
    expect(data).toEqual(expect.objectContaining({userData: {key: null}}));
  });
  it("converts 'EventId' to null", async() => {
    let data = {userData: {key: "EventId" }, customData: {}};

    convertFalsies(data);
    expect(data).toEqual(expect.objectContaining({userData: {key: null}}));
  });
});

describe("convertFalsies customData level", () => {
  it("converts 'Automatic' to null", async() => {
    let data = {userData: {}, customData: {key: "Automatic" }};

    convertFalsies(data);
    expect(data).toEqual(expect.objectContaining({customData: {key: null}}));
  });
  it("converts 'None' to null", async() => {
    let data = { userData: {}, customData: {key: "None" }};

    convertFalsies(data);
    expect(data).toEqual(expect.objectContaining({customData: {key: null}}));
  });
  it("converts 'EventId' to null", async() => {
    let data = {userData: {}, customData: {key: "EventId" }};

    convertFalsies(data);
    expect(data).toEqual(expect.objectContaining({customData: {key: null}}));
  });
});



