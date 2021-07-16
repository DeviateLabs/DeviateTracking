/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "InitiateCheckout";

describe(`${event}`, () => {
  it("should send the correct event type", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.eventName = event;

    await tmp.fireDeviateTracking({...global.data});
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(`"eventName":"${event}"`));
    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.anything(), expect.anything());
  });

  it("browser event sends all the required fields", async() => {
    data.sendServerEvent = true;
    data.sendBrowserEvent = true;
    data.eventName = event;
    data.contentCategory = "test";
    data.contentIds = "test";
    data.contentName = "test";
    data.contents = "test";
    data.currency = "test";
    data.numItems = "test";
    data.value = "test";
    data.orderId = "test";
    data.deliveryCategory = "test";

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({
      "content_category": "test",
      "content_ids": "test",
      "content_name": "test",
      "contents": "test",
      "currency": "test",
      "num_items": "test",
      "value": "test",
      "order_id": "test",
      "delivery_category": "test",
    }), expect.anything());
  });
});
