/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "ViewContent";

describe("server event handles valid user input for user_data", () => {
  it("should send em with server event", async() => {
    const variable = "em-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.email = variable;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"em\":\"b70a2cf45c7013f6fd099136d2813e4faf9e27188994134bb364622c2c22b7a7\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ph with server event", async() => {
    const variable = "ph-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.phone = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"ph\":\"183d8ffefd06da22ff7ff8d582c6af021052c30c501de414cc6677e3f10aa0cd\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ct with server event", async() => {
    const variable = "ct-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.city = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"ct\":\"2e4ace8e96664555478831c1929e93749a1b9afe99e13ee84d5963238e76dc90\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send db with server event", async() => {
    const variable = "db-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.dateOfBirth = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"db\":\"859e10568535547b84e9c9c09711dfd7444d626cce567a1e85d60c5ef67ed6e9\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send country with server event", async() => {
    const variable = "country-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.country = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"country\":\"bd6441ae8c36103ee0b9351e7ff4c9cc0d90d329b76bf872ecdd84dfe1523eea\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send fb_login_id with server event", async() => {
    const variable = "fb_login_id-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.fbLoginId = variable;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"fb_login_id":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send external_id with server event", async() => {
    const variable = "external_id-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.externalId = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"external_id\":\"962e857a5a0a4e66c44c6c25256f89f09f49efd8668a23c07d256e766a1910f1\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send fn with server event", async() => {
    const variable = "fn-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.firstName = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"fn\":\"770f51b33f32931fa9d262b94b667f2bc1d9b891f02d5720806b8f143cacab9b\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ln with server event", async() => {
    const variable = "ln-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.lastName = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"ln\":\"9421ad136116ff63d8981f4211740dd531aed1edc673308fc542222f6bbc7fa2\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ge with server event", async() => {
    const variable = "ge-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.gender = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"ge\":\"9a8605c1b9dec531dba4fef08060a17cd8ca99ec62d9daea33ba70ee397928ee\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send st with server event", async() => {
    const variable = "st-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.state = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"st\":\"dde51cb373c227bba732393517324716483c984f73cb98b6841110520025e739\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send subscription_id with server event", async() => {
    const variable = "subscription_id-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.subscriptionId = variable;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"subscription_id":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send zp with server event", async() => {
    const variable = "zp-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.zip = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"zp\":\"5e9b5d2610527d2270c805f78885c947a3bf190f0b96f7032eb628caf7b4e9cc\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});

describe("server event handles no input for user_data", () => {
  it("should send em with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"em\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ph with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"ph\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ct with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"ct\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send db with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"db\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send country with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"country\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send fb_login_id with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"fb_login_id\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send external_id with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"external_id\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send fn with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"fn\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ln with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"ln\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ge with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"ge\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send st with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"st\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send subscription_id with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"subscription_id\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send zp with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fetch).not.toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"zp\":\".*\"")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});

describe("browser event handles valid user input for user_data", () => {
  it("should send em with server event", async() => {
    const variable = "em-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.email = variable;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({em: "b70a2cf45c7013f6fd099136d2813e4faf9e27188994134bb364622c2c22b7a7"}));

    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ph with server event", async() => {
    const variable = "ph-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.phone = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({ph: "183d8ffefd06da22ff7ff8d582c6af021052c30c501de414cc6677e3f10aa0cd"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ct with server event", async() => {
    const variable = "ct-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.city = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({ct: "2e4ace8e96664555478831c1929e93749a1b9afe99e13ee84d5963238e76dc90"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send db with server event", async() => {
    const variable = "db-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.dateOfBirth = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({db: "859e10568535547b84e9c9c09711dfd7444d626cce567a1e85d60c5ef67ed6e9"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send country with server event", async() => {
    const variable = "country-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.country = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({country: "bd6441ae8c36103ee0b9351e7ff4c9cc0d90d329b76bf872ecdd84dfe1523eea"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send fb_login_id with server event", async() => {
    const variable = "fb_login_id-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.fbLoginId = variable;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({fb_login_id: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send external_id with server event", async() => {
    const variable = "external_id-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.externalId = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({external_id: "962e857a5a0a4e66c44c6c25256f89f09f49efd8668a23c07d256e766a1910f1"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send fn with server event", async() => {
    const variable = "fn-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.firstName = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({fn: "770f51b33f32931fa9d262b94b667f2bc1d9b891f02d5720806b8f143cacab9b"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ln with server event", async() => {
    const variable = "ln-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.lastName = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({ln: "9421ad136116ff63d8981f4211740dd531aed1edc673308fc542222f6bbc7fa2"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send ge with server event", async() => {
    const variable = "ge-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.gender = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({ge: "9a8605c1b9dec531dba4fef08060a17cd8ca99ec62d9daea33ba70ee397928ee"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send st with server event", async() => {
    const variable = "st-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.state = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({st: "dde51cb373c227bba732393517324716483c984f73cb98b6841110520025e739"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send subscription_id with server event", async() => {
    const variable = "subscription_id-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.subscriptionId = variable;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({subscription_id: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send zp with server event", async() => {
    const variable = "zp-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.zip = variable;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({zp: "5e9b5d2610527d2270c805f78885c947a3bf190f0b96f7032eb628caf7b4e9cc"}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});

describe("browser event handles no user input for user_data", () => {
  it("should not send undefined em with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({em: expect.anything()}));

    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined ph with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({ph: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined ct with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({ct: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined db with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({db: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined country with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({country: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined fb_login_id with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({fb_login_id: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined external_id with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({external_id: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined fn with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({fn: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined ln with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({ln: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined ge with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;


    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({ge: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined st with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({st: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined subscription_id with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({subscription_id: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should not send undefined zp with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //hashed
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.not.objectContaining({zp: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});
