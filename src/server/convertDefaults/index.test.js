const convertDefaults = require("./index.js");

describe("convertDefaults top level", () => {
  it("converts 'Automatic' to null", async() => {
    let data = {key: "Automatic", userData: {}, customData: {}};

    convertDefaults(data);
    expect(data).toEqual(expect.objectContaining({key: null}));
  });
  it("converts 'None' to null", async() => {
    let data = {key: "None", userData: {}, customData: {}};

    convertDefaults(data);
    expect(data).toEqual(expect.objectContaining({key: null}));
  });
  it("converts 'EventId' to null", async() => {
    let data = {key: "None", userData: {}, customData: {}};

    convertDefaults(data);
    expect(data).toEqual(expect.objectContaining({key: null}));
  });
});

describe("convertDefaults userData level", () => {
  it("converts 'Automatic' to null", async() => {
    let data = {userData: {key: "Automatic" }, customData: {}};

    convertDefaults(data);
    expect(data).toEqual(expect.objectContaining({userData: {key: null}}));
  });
  it("converts 'None' to null", async() => {
    let data = { userData: {key: "None" }, customData: {}};

    convertDefaults(data);
    expect(data).toEqual(expect.objectContaining({userData: {key: null}}));
  });
  it("converts 'EventId' to null", async() => {
    let data = {userData: {key: "EventId" }, customData: {}};

    convertDefaults(data);
    expect(data).toEqual(expect.objectContaining({userData: {key: null}}));
  });
});

describe("convertDefaults customData level", () => {
  it("converts 'Automatic' to null", async() => {
    let data = {userData: {}, customData: {key: "Automatic" }};

    convertDefaults(data);
    expect(data).toEqual(expect.objectContaining({customData: {key: null}}));
  });
  it("converts 'None' to null", async() => {
    let data = { userData: {}, customData: {key: "None" }};

    convertDefaults(data);
    expect(data).toEqual(expect.objectContaining({customData: {key: null}}));
  });
  it("converts 'EventId' to null", async() => {
    let data = {userData: {}, customData: {key: "EventId" }};

    convertDefaults(data);
    expect(data).toEqual(expect.objectContaining({customData: {key: null}}));
  });
});



