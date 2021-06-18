/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "Search";

describe(`${event}`, () => {
  it("should send the correct event type", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"event_name":"${event}"`)));
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.anything());
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("browser event sends all the required fields", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({
      "event_id": expect.anything(),
      "content_category": null,
      "content_ids": null,
      "content_name": null,
      "contents": null,
      "search_string": null,
      "value": null,
      "order_id": null,
      "delivery_category": null,
      "currency": null,
    }));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});