/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "AddToWishlist";

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
    data.content_category = "test";
    data.content_ids = "test";
    data.content_name = "test";
    data.contents = "test";
    data.currency = "test";
    data.value = "test";
    data.order_id = "test";
    data.delivery_category = "test";
    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({
      "content_category": "test",
      "content_ids": "test",
      "content_name": "test",
      "contents": "test",
      "currency": "test",
      "value": "test",
      "order_id": "test",
      "delivery_category": "test",
    }), expect.anything());
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});
