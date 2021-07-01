/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "SubmitApplication";

describe(`${event}`, () => {
  it("should send the correct event type", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"event_name":"${event}"`)));
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.anything(), expect.anything());
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("browser event sends all the required fields", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.StandardEvents = event;
    data.content_name = "test";
    data.order_id = "test";
    data.delivery_category = "test";

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({
      "content_name": "test",
      "order_id": "test",
      "delivery_category": "test",
    }), expect.anything());
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});
