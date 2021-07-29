const createUserData = require("./index.js");


describe("createUserData email", () => {
  it("should output an email key", async() => {
    let result = createUserData({userData: {email: "test"}});
    expect(result).toEqual(expect.objectContaining({"em": "test"}));
  });
  it("should not output a null email key", async() => {
    let result = createUserData({userData: {email: null}});
    expect(result).not.toEqual(expect.objectContaining({"em": expect.anything()}));
  });
  it("should not output an undefined email key", async() => {
    let result = createUserData({userData: {email: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"em": expect.anything()}));
  });
});

describe("createUserData phone", () => {
  it("should output an phone key", async() => {
    let result = createUserData({userData: {phone: "test"}});
    expect(result).toEqual(expect.objectContaining({"ph": "test"}));
  });
  it("should not output a null phone key", async() => {
    let result = createUserData({userData: {phone: null}});
    expect(result).not.toEqual(expect.objectContaining({"ph": expect.anything()}));
  });
  it("should not output an undefined phone key", async() => {
    let result = createUserData({userData: {phone: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"ph": expect.anything()}));
  });
});

describe("createUserData city", () => {
  it("should output an city key", async() => {
    let result = createUserData({userData: {city: "test"}});
    expect(result).toEqual(expect.objectContaining({"ct": "test"}));
  });
  it("should not output a null city key", async() => {
    let result = createUserData({userData: {city: null}});
    expect(result).not.toEqual(expect.objectContaining({"ct": expect.anything()}));
  });
  it("should not output an undefined city key", async() => {
    let result = createUserData({userData: {city: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"ct": expect.anything()}));
  });
});

describe("createUserData userAgent", () => {
  it("should output an userAgent key", async() => {
    let result = createUserData({userData: {userAgent: "test"}});
    expect(result).toEqual(expect.objectContaining({"client_user_agent": "test"}));
  });
  it("should not output a null userAgent key", async() => {
    let result = createUserData({userData: {userAgent: null}});
    expect(result).not.toEqual(expect.objectContaining({"client_user_agent": expect.anything()}));
  });
  it("should not output an undefined userAgent key", async() => {
    let result = createUserData({userData: {userAgent: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"client_user_agent": expect.anything()}));
  });
});

describe("createUserData dateOfBirth", () => {
  it("should output an dateOfBirth key", async() => {
    let result = createUserData({userData: {dateOfBirth: "test"}});
    expect(result).toEqual(expect.objectContaining({"db": "test"}));
  });
  it("should not output a null dateOfBirth key", async() => {
    let result = createUserData({userData: {dateOfBirth: null}});
    expect(result).not.toEqual(expect.objectContaining({"db": expect.anything()}));
  });
  it("should not output an undefined dateOfBirth key", async() => {
    let result = createUserData({userData: {dateOfBirth: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"db": expect.anything()}));
  });
});

describe("createUserData country", () => {
  it("should output an country key", async() => {
    let result = createUserData({userData: {country: "test"}});
    expect(result).toEqual(expect.objectContaining({"country": "test"}));
  });
  it("should not output a null country key", async() => {
    let result = createUserData({userData: {country: null}});
    expect(result).not.toEqual(expect.objectContaining({"country": expect.anything()}));
  });
  it("should not output an undefined country key", async() => {
    let result = createUserData({userData: {country: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"country": expect.anything()}));
  });
});

describe("createUserData fbLoginId", () => {
  it("should output an fbLoginId key", async() => {
    let result = createUserData({userData: {fbLoginId: "test"}});
    expect(result).toEqual(expect.objectContaining({"fb_login_id": "test"}));
  });
  it("should not output a null fbLoginId key", async() => {
    let result = createUserData({userData: {fbLoginId: null}});
    expect(result).not.toEqual(expect.objectContaining({"fb_login_id": expect.anything()}));
  });
  it("should not output an undefined fbLoginId key", async() => {
    let result = createUserData({userData: {fbLoginId: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"fb_login_id": expect.anything()}));
  });
});

describe("createUserData fbc", () => {
  it("should output an fbc key", async() => {
    let result = createUserData({userData: {fbc: ["test"]}});
    expect(result).toEqual(expect.objectContaining({"fbc": "test"}));
  });
  it("should not output a null fbc key", async() => {
    let result = createUserData({userData: {fbc: null}});
    expect(result).not.toEqual(expect.objectContaining({"fbc": expect.anything()}));
  });
  it("should not output an undefined fbc key", async() => {
    let result = createUserData({userData: {fbc: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"fbc": expect.anything()}));
  });
});

describe("createUserData externalId", () => {
  it("should output an externalId key", async() => {
    let result = createUserData({userData: {externalId: "test"}});
    expect(result).toEqual(expect.objectContaining({"external_id": "test"}));
  });
  it("should not output a null externalId key", async() => {
    let result = createUserData({userData: {externalId: null}});
    expect(result).not.toEqual(expect.objectContaining({"external_id": expect.anything()}));
  });
  it("should not output an undefined externalId key", async() => {
    let result = createUserData({userData: {externalId: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"external_id": expect.anything()}));
  });
});


describe("createUserData fbp", () => {
  it("should output an fbp key", async() => {
    let result = createUserData({userData: {fbp: ["test"]}});
    expect(result).toEqual(expect.objectContaining({"fbp": "test"}));
  });
  it("should not output a null fbp key", async() => {
    let result = createUserData({userData: {fbp: null}});
    expect(result).not.toEqual(expect.objectContaining({"fbp": expect.anything()}));
  });
  it("should not output an undefined fbp key", async() => {
    let result = createUserData({userData: {fbp: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"fbp": expect.anything()}));
  });
});

describe("createUserData firstName", () => {
  it("should output a firstName key", async() => {
    let result = createUserData({userData: {firstName: "test"}});
    expect(result).toEqual(expect.objectContaining({"fn": "test"}));
  });
  it("should not output a null firstName key", async() => {
    let result = createUserData({userData: {firstName: null}});
    expect(result).not.toEqual(expect.objectContaining({"fn": expect.anything()}));
  });
  it("should not output an undefined firstName key", async() => {
    let result = createUserData({userData: {firstName: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"fn": expect.anything()}));
  });
});

describe("createUserData lastName", () => {
  it("should output a lastName key", async() => {
    let result = createUserData({userData: {lastName: "test"}});
    expect(result).toEqual(expect.objectContaining({"ln": "test"}));
  });
  it("should not output a null lastName key", async() => {
    let result = createUserData({userData: {lastName: null}});
    expect(result).not.toEqual(expect.objectContaining({"ln": expect.anything()}));
  });
  it("should not output an undefined lastName key", async() => {
    let result = createUserData({userData: {lastName: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"ln": expect.anything()}));
  });
});

describe("createUserData gender", () => {
  it("should output an gender key", async() => {
    let result = createUserData({userData: {gender: "test"}});
    expect(result).toEqual(expect.objectContaining({"ge": "test"}));
  });
  it("should not output a null gender key", async() => {
    let result = createUserData({userData: {gender: null}});
    expect(result).not.toEqual(expect.objectContaining({"ge": expect.anything()}));
  });
  it("should not output an undefined gender key", async() => {
    let result = createUserData({userData: {gender: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"ge": expect.anything()}));
  });
});


describe("createUserData state", () => {
  it("should output a state key", async() => {
    let result = createUserData({userData: {state: "test"}});
    expect(result).toEqual(expect.objectContaining({"st": "test"}));
  });
  it("should not output a null state key", async() => {
    let result = createUserData({userData: {state: null}});
    expect(result).not.toEqual(expect.objectContaining({"st": expect.anything()}));
  });
  it("should not output an undefined state key", async() => {
    let result = createUserData({userData: {state: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"st": expect.anything()}));
  });
});

describe("createUserData subscriptionId", () => {
  it("should output a subscriptionId key", async() => {
    let result = createUserData({userData: {subscriptionId: "test"}});
    expect(result).toEqual(expect.objectContaining({"subscription_id": "test"}));
  });
  it("should not output a null subscriptionId key", async() => {
    let result = createUserData({userData: {subscriptionId: null}});
    expect(result).not.toEqual(expect.objectContaining({"subscription_id": expect.anything()}));
  });
  it("should not output an undefined subscriptionId key", async() => {
    let result = createUserData({userData: {subscriptionId: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"subscription_id": expect.anything()}));
  });
});


describe("createUserData zip", () => {
  it("should output an zip key", async() => {
    let result = createUserData({userData: {zip: "test"}});
    expect(result).toEqual(expect.objectContaining({"zp": "test"}));
  });
  it("should not output a null zip key", async() => {
    let result = createUserData({userData: {zip: null}});
    expect(result).not.toEqual(expect.objectContaining({"zp": expect.anything()}));
  });
  it("should not output an undefined zip key", async() => {
    let result = createUserData({userData: {zip: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"zp": expect.anything()}));
  });
});


describe("createUserData ipAddress", () => {
  it("should output an ipAddress key", async() => {
    let result = createUserData({userData: {ipAddress: "test"}});
    expect(result).toEqual(expect.objectContaining({"client_ip_address": "test"}));
  });
  it("should not output a null ipAddress key", async() => {
    let result = createUserData({userData: {ipAddress: null}});
    expect(result).not.toEqual(expect.objectContaining({"client_ip_address": expect.anything()}));
  });
  it("should not output an undefined ipAddress key", async() => {
    let result = createUserData({userData: {ipAddress: undefined}});
    expect(result).not.toEqual(expect.objectContaining({"client_ip_address": expect.anything()}));
  });
});



describe("createUserData", () => {
  it("ignores extra keys", async() => {
    let result = createUserData({doesnotexist: "mea"});
    expect(result).not.toEqual(expect.objectContaining({"doesnotexist": "mea"}));
  });
});

