jest.mock("../../createUserDataObject/index.js");

const initPixel = require("./index.js");
const createUserDataObject = require("../../createUserDataObject");


beforeEach(() => {
  jest.resetAllMocks();

  global.fbq = jest.fn(() => {});
  global.fbq.getState = () => {
    return {pixels: []};
  };

  createUserDataObject.mockImplementation(() => {
    return {
      "key": "value",
    };
  });
});


describe("initPixel when there are no other pixels", () => {
  it("should call fbq", async() => {
    initPixel({
      pixelId: "pixel-id",
      userData: {
        externalId: "external-id",
      },
    });
    expect(global.fbq).toHaveBeenCalled();
  });

  it("calls fbq with 'init' as first parameter", async() => {
    initPixel({
      pixelId: "pixel-id",
      userData: {
        externalId: "external-id",
      },
    });
    expect(global.fbq).toHaveBeenCalledWith("init", expect.anything(), expect.anything());
  });

  it("calls fbq with the pixel id as second parameter", async() => {
    initPixel({
      pixelId: "pixel-id",
      userData: {
        externalId: "external-id",
      },
    });
    expect(global.fbq).toHaveBeenCalledWith(expect.anything(), "pixel-id", expect.anything());
  });

  it("calls fbq with the external id in the third parameter", async() => {
    initPixel({
      pixelId: "pixel-id",
      userData: {
        externalId: "external-id",
      },
    });
    expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({"extern_id": "external-id"}));
  });

  it("calls fbq with the user data keys in the third parameter", async() => {
    initPixel({
      pixelId: "pixel-id",
      userData: {
        externalId: "external-id",
        testkey: "testvalue",
      },
    });
    expect(global.fbq).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({"key": "value"}));
  });
});
