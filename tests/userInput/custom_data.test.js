/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "ViewContent";

describe("server event handles valid user input for custom_data", () => {
  it("should send content_category with server event", async() => {
    const variable = "content_category-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.content_category = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"content_category":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send content_ids with server event", async() => {
    const variable = "content_ids-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.content_ids = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"content_ids":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send content_name with server event", async() => {
    const variable = "content_name-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.content_name = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"content_name":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send content_type with server event", async() => {
    const variable = "content_type-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.content_type = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"content_type":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send contents with server event", async() => {
    const variable = "contents-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.contents = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"contents":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send currency with server event", async() => {
    const variable = "currency-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.currency = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"currency":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send delivery_category with server event", async() => {
    const variable = "delivery_category-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.delivery_category = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"delivery_category":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send num_items with server event", async() => {
    const variable = "num_items-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.num_items = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"num_items":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send order_id with server event", async() => {
    const variable = "order_id-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.order_id = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"order_id":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send predicted_ltv with server event", async() => {
    const variable = "predicted_ltv-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.predicted_ltv = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"predicted_ltv":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send search_string with server event", async() => {
    const variable = "search_string-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.search_string = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"search_string":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send status with server event", async() => {
    const variable = "status-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.status = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"status":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send value with server event", async() => {
    const variable = "value-value";

    data.sendServerEvent = true;
    data.StandardEvents = event;

    data.value = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent(`"value":"${variable}"`)));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});

describe("server event handles no input for custom_data", () => {
  it("should send content_category with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"content_category\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send content_ids with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;
    delete data.content_ids;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"content_ids\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send content_name with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;
    delete data.content_name;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"content_name\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send content_type with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"content_type\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send contents with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;
    delete data.contents;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"contents\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send currency with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"currency\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send delivery_category with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;
    delete data.delivery_category;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"delivery_category\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send num_items with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"num_items\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send order_id with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    delete data.order_id;
    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"order_id\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send predicted_ltv with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"predicted_ltv\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send search_string with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"search_string\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send status with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"status\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send value with server event", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = event;
    delete data.value;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(encodeURIComponent("\"value\":null")));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});

describe("browser event handles valid user input for custom_data", () => {
  it("should send content_category", async() => {
    const variable = "content_category-value";

    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";

    data.content_category = variable;

    await tmp.fireDeviateTracking({ ...global.data });
    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({content_category: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send content_ids", async() => {
    const variable = "content_ids-value";

    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";

    data.content_ids = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({content_ids: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send content_name", async() => {
    const variable = "content_name-value";

    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";

    data.content_name = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({content_name: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send content_type", async() => {
    const variable = "content_type-value";

    data.sendServerEvent = true;
    data.StandardEvents = "AddToCart";

    data.content_type = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddToCart", expect.objectContaining({content_type: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send contents", async() => {
    const variable = "contents-value";

    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";

    data.contents = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({contents: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send currency", async() => {
    const variable = "currency-value";

    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";

    data.currency = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({currency: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send delivery_category", async() => {
    const variable = "delivery_category-value";

    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";

    data.delivery_category = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({delivery_category: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send num_items", async() => {
    const variable = "num_items-value";

    data.sendServerEvent = true;
    data.StandardEvents = "InitiateCheckout";

    data.num_items = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "InitiateCheckout", expect.objectContaining({num_items: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send order_id", async() => {
    const variable = "order_id-value";

    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";

    data.order_id = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({order_id: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send predicted_ltv", async() => {
    const variable = "predicted_ltv-value";

    data.sendServerEvent = true;
    data.StandardEvents = "StartTrial";

    data.predicted_ltv = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "StartTrial", expect.objectContaining({predicted_ltv: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send search_string", async() => {
    const variable = "search_string-value";

    data.sendServerEvent = true;
    data.StandardEvents = "Search";

    data.search_string = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "Search", expect.objectContaining({search_string: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send status", async() => {
    const variable = "status-value";

    data.sendServerEvent = true;
    data.StandardEvents = "CompleteRegistration";

    data.status = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "CompleteRegistration", expect.objectContaining({status: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should send value", async() => {
    const variable = "value-value";

    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";

    data.value = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({value: variable}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});

describe("browser event handles no user input for custom_data", () => {
  it("should not send undefined  content_category", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";
    delete data.content_category;

    await tmp.fireDeviateTracking({ ...global.data });
    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({content_category: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  content_ids", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";
    delete data.content_ids;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({content_ids: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined content_name", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";
    delete data.content_name;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({content_name: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  content_type", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "AddToCart";
    delete data.content_type;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddToCart", expect.not.objectContaining({content_type: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  contents", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";
    delete data.contents;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({contents: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  currency", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";
    delete data.currency;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({currency: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  delivery_category", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";
    delete data.delivery_category;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({delivery_category: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  num_items", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "InitiateCheckout";
    delete data.num_items;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "InitiateCheckout", expect.not.objectContaining({num_items: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  order_id", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";
    delete data.order_id;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({order_id: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  predicted_ltv", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "StartTrial";
    delete data.predicted_ltv;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "StartTrial", expect.not.objectContaining({predicted_ltv: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  search_string", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "Search";
    delete data.search_string;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "Search", expect.not.objectContaining({search_string: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  status", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "CompleteRegistration";
    delete data.status;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "CompleteRegistration", expect.not.objectContaining({status: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });

  it("should not send undefined  value", async() => {
    data.sendServerEvent = true;
    data.StandardEvents = "AddPaymentInfo";
    delete data.value;
    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({value: expect.anything()}));
    expect(data.gtmOnSuccess).toHaveBeenCalled();
    expect(data.gtmOnFailure).not.toHaveBeenCalled();
  });
});
