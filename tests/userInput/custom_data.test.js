/*eslint-disable complexity */
const tmp = require("server/deviatetracking.js");

const event = "ViewContent";

describe("browser event handles valid user input for custom_data", () => {
  it("should send contentCategory", async() => {
    const variable = "contentCategory-value";

    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";

    data.contentCategory = variable;

    await tmp.fireDeviateTracking({ ...global.data });
    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({content_category: variable}), expect.anything());
  });

  it("should send content_ids", async() => {
    const variable = "content_ids-value";

    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";

    data.contentIds = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({content_ids: variable}), expect.anything());
  });

  it("should send contentName", async() => {
    const variable = "contentName-value";

    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";

    data.contentName = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({content_name: variable}), expect.anything());
  });

  it("should send contentType", async() => {
    const variable = "contentType-value";

    data.sendBrowserEvent = true;
    data.eventName = "AddToCart";

    data.contentType = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddToCart", expect.objectContaining({content_type: variable}), expect.anything());
  });

  it("should send contents", async() => {
    const variable = "contents-value";

    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";

    data.contents = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({contents: variable}), expect.anything());
  });

  it("should send currency", async() => {
    const variable = "currency-value";

    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";

    data.currency = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({currency: variable}), expect.anything());
  });

  it("should send deliveryCategory", async() => {
    const variable = "deliveryCategory-value";

    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";

    data.deliveryCategory = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({delivery_category: variable}), expect.anything());
  });

  it("should send numItems", async() => {
    const variable = "numItems-value";

    data.sendBrowserEvent = true;
    data.eventName = "InitiateCheckout";

    data.numItems = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "InitiateCheckout", expect.objectContaining({num_items: variable}), expect.anything());
  });

  it("should send orderId", async() => {
    const variable = "orderId-value";

    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";

    data.orderId = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({order_id: variable}), expect.anything());
  });

  it("should send predictedLtv", async() => {
    const variable = "predictedLtv-value";

    data.sendBrowserEvent = true;
    data.eventName = "StartTrial";

    data.predictedLtv = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "StartTrial", expect.objectContaining({predicted_ltv: variable}), expect.anything());
  });

  it("should send searchString", async() => {
    const variable = "searchString-value";

    data.sendBrowserEvent = true;
    data.eventName = "Search";

    data.searchString = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "Search", expect.objectContaining({search_string: variable}), expect.anything());
  });

  it("should send status", async() => {
    const variable = "status-value";

    data.sendBrowserEvent = true;
    data.eventName = "CompleteRegistration";

    data.status = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "CompleteRegistration", expect.objectContaining({status: variable}), expect.anything());
  });

  it("should send value", async() => {
    const variable = "value-value";

    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";

    data.value = variable;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.objectContaining({value: variable}), expect.anything());
  });
});

describe("browser event handles no user input for custom_data", () => {
  it("should not send undefined  contentCategory", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";
    delete data.contentCategory;

    await tmp.fireDeviateTracking({ ...global.data });
    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({content_category: expect.anything()}), expect.anything());
  });

  it("should not send undefined  content_ids", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";
    delete data.content_ids;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({content_ids: expect.anything()}), expect.anything());
  });

  it("should not send undefined contentName", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";
    delete data.contentName;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({contentName: expect.anything()}), expect.anything());
  });

  it("should not send undefined  contentType", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddToCart";
    delete data.contentType;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddToCart", expect.not.objectContaining({contentType: expect.anything()}), expect.anything());
  });

  it("should not send undefined  contents", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";
    delete data.contents;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({contents: expect.anything()}), expect.anything());
  });

  it("should not send undefined  currency", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";
    delete data.currency;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({currency: expect.anything()}), expect.anything());
  });

  it("should not send undefined deliveryCategory", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";
    delete data.deliveryCategory;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({deliveryCategory: expect.anything()}), expect.anything());
  });

  it("should not send deliveryCategory='None' (gtm for undefined)", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";
    data.deliveryCategory = "None";

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({deliveryCategory: expect.anything()}), expect.anything());
  });

  it("should not send undefined  numItems", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "InitiateCheckout";
    delete data.numItems;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "InitiateCheckout", expect.not.objectContaining({numItems: expect.anything()}), expect.anything());
  });

  it("should not send undefined  orderId", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";
    delete data.orderId;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({orderId: expect.anything()}), expect.anything());
  });

  it("should not send undefined  predictedLtv", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "StartTrial";
    delete data.predictedLtv;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "StartTrial", expect.not.objectContaining({predictedLtv: expect.anything()}), expect.anything());
  });

  it("should not send undefined  searchString", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "Search";
    delete data.searchString;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "Search", expect.not.objectContaining({searchString: expect.anything()}), expect.anything());
  });

  it("should not send undefined  status", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "CompleteRegistration";
    delete data.status;

    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "CompleteRegistration", expect.not.objectContaining({status: expect.anything()}), expect.anything());
  });

  it("should not send undefined  value", async() => {
    data.sendBrowserEvent = true;
    data.eventName = "AddPaymentInfo";
    delete data.value;
    await tmp.fireDeviateTracking({ ...global.data });

    expect(global.fbq).toHaveBeenCalledWith("track", "AddPaymentInfo", expect.not.objectContaining({value: expect.anything()}), expect.anything());
  });
});
