/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "AddToCart";

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
    data.contentIds = "test";
    data.contentName = "test";
    data.contentType = "test";
    data.contents = "test";
    data.currency = "test";
    data.value = "test";
    data.orderId = "test";
    data.deliveryCategory = "test";

    await tmp.fireDeviateTracking({...global.data});

    expect(global.fbq).toHaveBeenCalledWith("track", event, expect.objectContaining({
      "content_ids": "test",
      "content_name": "test",
      "content_type": "test",
      "contents": "test",
      "currency": "test",
      "value": "test",
      "order_id": "test",
      "delivery_category": "test",
    }), expect.anything());
  });
});
