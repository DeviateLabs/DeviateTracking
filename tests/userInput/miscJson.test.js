/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "ViewContent";

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

