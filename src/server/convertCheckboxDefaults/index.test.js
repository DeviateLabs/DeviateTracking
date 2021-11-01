const convertCheckboxDefaults = require("./index.js");



describe("convertCheckboxDefaults", () => {
  it("does nothing if !data", async() => {
    let data = null;

    convertCheckboxDefaults(null);
    expect(data).toEqual(null);
  });
});

describe("convertCheckboxDefaults initializePixel", () => {
  it("converts undefined", async() => {
    let data = {};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({initializePixel: true}));
  });
  it("does not convert false", async() => {
    let data = {initializePixel: false};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({initializePixel: false}));
  });
  it("does not convert null", async() => {
    let data = {initializePixel: null};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({initializePixel: null}));
  });
  it("does not convert a string", async() => {
    let data = {initializePixel: "test"};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({initializePixel: "test"}));
  });
  it("does not convert an integer", async() => {
    let data = {initializePixel: 1};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({initializePixel: 1}));
  });
  it("does not convert zero", async() => {
    let data = {initializePixel: 0};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({initializePixel: 0}));
  });
});

describe("convertCheckboxDefaults injectBaseCode", () => {
  it("converts undefined", async() => {
    let data = {};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({injectBaseCode: true}));
  });
  it("does not convert false", async() => {
    let data = {injectBaseCode: false};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({injectBaseCode: false}));
  });
  it("does not convert null", async() => {
    let data = {injectBaseCode: null};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({injectBaseCode: null}));
  });
  it("does not convert a string", async() => {
    let data = {injectBaseCode: "test"};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({injectBaseCode: "test"}));
  });
  it("does not convert an integer", async() => {
    let data = {injectBaseCode: 1};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({injectBaseCode: 1}));
  });
  it("does not convert zero", async() => {
    let data = {injectBaseCode: 0};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({injectBaseCode: 0}));
  });
});

describe("convertCheckboxDefaults sendBrowserEvent", () => {
  it("converts undefined", async() => {
    let data = {};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendBrowserEvent: true}));
  });
  it("does not convert false", async() => {
    let data = {sendBrowserEvent: false};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendBrowserEvent: false}));
  });
  it("does not convert null", async() => {
    let data = {sendBrowserEvent: null};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendBrowserEvent: null}));
  });
  it("does not convert a string", async() => {
    let data = {sendBrowserEvent: "test"};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendBrowserEvent: "test"}));
  });
  it("does not convert an integer", async() => {
    let data = {sendBrowserEvent: 1};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendBrowserEvent: 1}));
  });
  it("does not convert zero", async() => {
    let data = {sendBrowserEvent: 0};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendBrowserEvent: 0}));
  });
});

describe("convertCheckboxDefaults sendServerEvent", () => {
  it("converts undefined", async() => {
    let data = {};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendServerEvent: true}));
  });
  it("does not convert false", async() => {
    let data = {sendServerEvent: false};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendServerEvent: false}));
  });
  it("does not convert null", async() => {
    let data = {sendServerEvent: null};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendServerEvent: null}));
  });
  it("does not convert a string", async() => {
    let data = {sendServerEvent: "test"};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendServerEvent: "test"}));
  });
  it("does not convert an integer", async() => {
    let data = {sendServerEvent: 1};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendServerEvent: 1}));
  });
  it("does not convert zero", async() => {
    let data = {sendServerEvent: 0};

    convertCheckboxDefaults(data);
    expect(data).toEqual(expect.objectContaining({sendServerEvent: 0}));
  });
});
