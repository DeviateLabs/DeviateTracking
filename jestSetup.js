const {Crypto} = require("@peculiar/webcrypto");

let windowSpy;

beforeEach(() => {
  global.crypto = new Crypto();
  windowSpy = jest.spyOn(window, "window", "get");

  windowSpy.mockImplementation(() => ({
    location: {
      href: "https://example.com",
    },
    navigator: {
      userAgent: "fake ua",
    },
  }));

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ ip: "192.192.192.192" }),
  }));

  global.fbq = jest.fn(() => {});

  jest
    .spyOn(global.Date, "now")
    .mockImplementation(() => new Date("2019-05-14T11:01:58.135Z").valueOf());

  global.data = {
    "DeduplicationEventID": "EventId",
    "FBToken": "fakefbtoken",
    "LicensedEmail": "deviatetracking@gmail.com",
    "StandardEvents": "Search",
    "TestEventLabel": "RavenTestEvent",
    "TestEventStatus": true,
    "apiAccessToken": "fakeapitoken",
    "fbc": [],
    "gtmEventId": 9,
    "gtmTagId": 57,
    "pixelId": "fakepixelid",
    "sendBrowserEvent": true,
    "sendServerEvent": true,
    gtmOnSuccess: jest.fn(() => {}),
    gtmOnFailure: jest.fn(() => {}),
  };
});

global.standardEvents = {
  "AddPaymentInfo": ["DeduplicationEventID", "content_category", "content_ids", "content_name", "contents", "currency", "value", "order_id", "delivery_category"],
  "AddToCart": ["DeduplicationEventID", "content_ids", "content_name", "content_type", "contents", "currency", "value", "order_id", "delivery_category"],
  "AddToWishlist": ["DeduplicationEventID", "content_category", "content_ids", "content_name", "contents", "currency", "value", "order_id", "delivery_category"],
  "CompleteRegistration": ["DeduplicationEventID", "content_name", "currency", "status", "value", "order_id", "delivery_category"],
  "Contact": ["DeduplicationEventID", "content_name", "order_id", "delivery_category"],
  "CustomizeProduct": ["DeduplicationEventID", "content_name", "order_id", "delivery_category"],
  "Donate": ["DeduplicationEventID", "content_name", "order_id", "delivery_category"],
  "FindLocation": ["DeduplicationEventID", "content_name", "order_id", "delivery_category"],
  "InitiateCheckout": ["DeduplicationEventID", "content_category", "content_ids", "content_name", "contents", "currency", "num_items", "value", "order_id", "delivery_category"],
  "Lead": ["DeduplicationEventID", "content_category", "content_name", "currency", "value", "order_id", "delivery_category"],
  "Purchase": ["DeduplicationEventID", "content_ids", "content_name", "content_type", "contents", "currency", "num_items", "value", "order_id", "delivery_category"],
  "Schedule": ["DeduplicationEventID", "content_name", "order_id", "delivery_category"],
  "Search": ["DeduplicationEventID", "content_category", "content_ids", "content_name", "contents", "search_string", "value", "order_id", "delivery_category"],
  "StartTrial": ["DeduplicationEventID", "content_name", "predicted_ltv", "value", "order_id", "delivery_category"],
  "SubmitApplication": ["DeduplicationEventID", "content_name", "order_id", "delivery_category"],
  "Subscribe": ["DeduplicationEventID", "content_name", "predicted_ltv", "value", "order_id", "delivery_category"],
  "ViewContent": ["DeduplicationEventID", "content_category", "content_ids", "content_name", "content_type", "contents", "value", "order_id", "delivery_category"],
};

global.eventFields = {
  DeduplicationEventID: [null, "dedupe-event-id"],
  content_ids: [null, "content-id"],
  content_name: [null, "content-name"],
  content_type: [null, "content-type"],
  contents: [null, "contents"],
  currency: [null, "currency"],
  delivery_category: [null, "delivery-category"],
  order_id: [null, "order-id"],
  search_string: [null, "search-string"],
  status: [null, "status"],
  value: [null, "value"],
  content_category: [null, "content-category"],
  num_items: [null, "0"],
  predicted_ltv: [null, "24"],
};

afterEach(() => {
  windowSpy.mockRestore();
});
