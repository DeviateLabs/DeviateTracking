jest.mock("../sha256/index.js");

const hashData = require("./index.js");
const sha256 = require("../sha256/index.js");


beforeEach(() => {
  jest.resetAllMocks();

  sha256.mockImplementation(async() => {
    return "hash-string";
  });
});


describe("hashData userData.email", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        email: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({email: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({email: "hash-string"})}));
  });
});

describe("hashData userData.phone", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        phone: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({phone: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({phone: "hash-string"})}));
  });
});


describe("hashData userData.gender", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        gender: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({gender: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({gender: "hash-string"})}));
  });
});


describe("hashData userData.dateOfBirth", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        dateOfBirth: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({dateOfBirth: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({dateOfBirth: "hash-string"})}));
  });
});


describe("hashData userData.lastName", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        lastName: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({lastName: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({lastName: "hash-string"})}));
  });
});


describe("hashData userData.firstName", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        firstName: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({firstName: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({firstName: "hash-string"})}));
  });
});


describe("hashData userData.city", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        city: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({city: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({city: "hash-string"})}));
  });
});


describe("hashData userData.state", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        state: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({state: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({state: "hash-string"})}));
  });
});


describe("hashData userData.zip", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        zip: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({zip: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({zip: "hash-string"})}));
  });
});


describe("hashData userData.city", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        city: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({city: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({city: "hash-string"})}));
  });
});


describe("hashData userData.country", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        country: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({country: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({country: "hash-string"})}));
  });
});


describe("hashData userData.externalId", () => {
  it("should hash it", async() => {
    let data = {
      userData: {
        externalId: "value",

      },
    };
    await hashData(data);
    expect(data).toEqual(expect.objectContaining({"userData": expect.objectContaining({externalId: "hash-string"})}));
  });

  it("should not hash it if it is not defined", async() => {
    let data = {
      userData: {},
    };
    await hashData(data);
    expect(data).not.toEqual(expect.objectContaining({"userData": expect.objectContaining({externalId: "hash-string"})}));
  });
});

