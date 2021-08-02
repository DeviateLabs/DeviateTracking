const setFbCookies = require("./index.js");
beforeEach(() => {
  global.document = {
    cookie: "",
  };
});

describe("setFbCookies", () => {
  it("should add a fbp key based on _fbp cookie", async() => {
    let data = {};
    global.document.cookie = "_fbp=fb.1.1596403881668.1116446470";
    await setFbCookies(data);
    expect(data.userData).toEqual(expect.objectContaining({"fbp": "fb.1.1596403881668.1116446470"}));
  });
  it("should not add a fbp key if no _fbp cookie", async() => {
    let data = {};
    await setFbCookies(data);
    expect(data.userData).not.toEqual(expect.objectContaining({"fbp": expect.anything()}));
  });

  it("should add a fbc key based on _fbc cookie", async() => {
    let data = {};
    global.document.cookie = "_fbc=fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890";
    await setFbCookies(data);
    expect(data.userData).toEqual(expect.objectContaining({"fbc": "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890"}));
  });
  it("should not add a fbc key if no _fbc cookie", async() => {
    let data = {};
    await setFbCookies(data);
    expect(data.userData).not.toEqual(expect.objectContaining({"fbc": expect.anything()}));
  });
});
