/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "ViewContent";

describe("server event handles valid user input for misc non-json data", () => {
  it("should send license_key with server event", async() => {
    const variable = "license_key-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.apiAccessToken = variable;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching((`license_key=${encodeURIComponent(variable)}`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send email with server event", async() => {
    const variable = "email-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.LicensedEmail = variable;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(`email=${encodeURIComponent(variable)}`));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send fbaccess_tkn with server event", async() => {
    const variable = "fbaccess_tkn-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.FBToken = variable;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(`fbaccess_tkn=${encodeURIComponent(variable)}`));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send  with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching("product_id=DeviateToolsCapi_Prod"));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send fbpixel_id with server event", async() => {
    const variable = "fbpixel_id-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.pixelId = variable;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(`fbpixel_id=${encodeURIComponent(variable)}`));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send test_event_code with server event", async() => {
    const variable = "test_event_code-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.TestEventLabel = variable;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(`test_event_code=${encodeURIComponent(variable)}`));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});

describe("server event handles valid user input for misc json data", () => {
  it("should send event_name with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"event_name":"${event}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send event_time with server event", async() => {
    const variable = "event_time-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.event_time = variable;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("event_time")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send action_source with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("action_source")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send DeduplicationEventID with server event", async() => {
    const variable = "DeduplicationEventID-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.DeduplicationEventID = variable;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"event_id":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
  it("should send event_source_url with server event", async() => {
    const variable = "event_source_url-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    //email is hashed
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("event_source_url")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});

