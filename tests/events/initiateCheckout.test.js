/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "InitiateCheckout";

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
    data.content_category = "test";
    data.content_ids = "test";
    data.content_name = "test";
    data.contents = "test";
    data.currency = "test";
    data.num_items = "test";
    data.value = "test";
    data.order_id = "test";
    data.delivery_category = "test";

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({
      "event_id": expect.anything(),
      "content_category": "test",
      "content_ids": "test",
      "content_name": "test",
      "contents": "test",
      "currency": "test",
      "num_items": "test",
      "value": "test",
      "order_id": "test",
      "delivery_category": "test",
    }));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});
