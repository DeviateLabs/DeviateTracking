jest.mock("../createUserDataObject/index.js");

const createUserDataObject = require("../createUserDataObject/index.js");
const extractFbqProps = require("./index.js");

beforeEach(() => {
  jest.resetAllMocks();

  createUserDataObject.mockImplementation(() => {});
});


describe("extractFbqProps AddPaymentInfo", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.contentCategory key", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {contentCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_category": "test"}));
  });
  it("should not output a customData.contentCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_category": expect.anything()}));
  });

  it("should output a customData.contentIds key", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {contentIds: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_ids": "test"}));
  });
  it("should not output a customData.contentIds key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_ids": expect.anything()}));
  });

  it("should output a customData.contents key", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {contents: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"contents": "test"}));
  });
  it("should not output a customData.contents key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"contents": expect.anything()}));
  });

  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddPaymentInfo",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });
});

describe("extractFbqProps AddToWishlist", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });

  it("should output a customData.contentCategory key", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {contentCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_category": "test"}));
  });
  it("should not output a customData.contentCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_category": expect.anything()}));
  });

  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });

  it("should output a customData.contentIds key", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {contentIds: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_ids": "test"}));
  });
  it("should not output a customData.contentIds key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_ids": expect.anything()}));
  });

  it("should output a customData.contents key", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {contents: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"contents": "test"}));
  });
  it("should not output a customData.contents key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "AddToWishlist",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"contents": expect.anything()}));
  });
});

describe("extractFbqProps CompleteRegistration", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });

  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });

  it("should output a customData.status key", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {status: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"status": "test"}));
  });
  it("should not output a customData.status key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CompleteRegistration",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"status": expect.anything()}));
  });
});

describe("extractFbqProps Contact", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "Contact",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Contact",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "Contact",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Contact",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "Contact",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Contact",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "Contact",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Contact",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });
});

describe("extractFbqProps CustomizeProduct", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "CustomizeProduct",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CustomizeProduct",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "CustomizeProduct",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CustomizeProduct",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "CustomizeProduct",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CustomizeProduct",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "CustomizeProduct",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "CustomizeProduct",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });
});

describe("extractFbqProps Donate", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "Donate",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Donate",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "Donate",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Donate",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "Donate",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Donate",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "Donate",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Donate",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });
});

describe("extractFbqProps FindLocation", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "FindLocation",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "FindLocation",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "FindLocation",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "FindLocation",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "FindLocation",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "FindLocation",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "FindLocation",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "FindLocation",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });
});

describe("extractFbqProps InitiateCheckout", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });

  it("should output a customData.contentCategory key", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {contentCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_category": "test"}));
  });
  it("should not output a customData.contentCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_category": expect.anything()}));
  });

  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });

  it("should output a customData.contentIds key", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {contentIds: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_ids": "test"}));
  });
  it("should not output a customData.contentIds key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_ids": expect.anything()}));
  });

  it("should output a customData.contents key", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {contents: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"contents": "test"}));
  });
  it("should not output a customData.contents key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"contents": expect.anything()}));
  });

  it("should output a customData.numItems key", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {numItems: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"num_items": "test"}));
  });
  it("should not output a customData.numItems key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "InitiateCheckout",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"num_items": expect.anything()}));
  });
});

describe("extractFbqProps Lead", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });

  it("should output a customData.contentCategory key", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {contentCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_category": "test"}));
  });
  it("should not output a customData.contentCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_category": expect.anything()}));
  });

  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Lead",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });
});

describe("extractFbqProps PageView", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "PageView",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "PageView",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "PageView",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "PageView",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "PageView",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "PageView",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "PageView",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "PageView",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });
});

describe("extractFbqProps Purchase", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });


  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });


  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });


  it("should output a customData.contentIds key", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {contentIds: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_ids": "test"}));
  });
  it("should not output a customData.contentIds key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_ids": expect.anything()}));
  });

  it("should output a customData.contents key", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {contents: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"contents": "test"}));
  });
  it("should not output a customData.contents key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"contents": expect.anything()}));
  });

  it("should output a customData.numItems key", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {numItems: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"num_items": "test"}));
  });
  it("should not output a customData.numItems key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"num_items": expect.anything()}));
  });

  it("should output a customData.contentType key", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {contentType: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_type": "test"}));
  });
  it("should not output a customData.contentType key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Purchase",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_type": expect.anything()}));
  });
});

describe("extractFbqProps Schedule", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "Schedule",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Schedule",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "Schedule",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Schedule",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "Schedule",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Schedule",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "Schedule",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Schedule",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });
});

describe("extractFbqProps Search", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });

  it("should output a customData.contentCategory key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {contentCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_category": "test"}));
  });
  it("should not output a customData.contentCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_category": expect.anything()}));
  });

  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });

  it("should output a customData.contentIds key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {contentIds: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_ids": "test"}));
  });
  it("should not output a customData.contentIds key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_ids": expect.anything()}));
  });

  it("should output a customData.contents key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {contents: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"contents": "test"}));
  });
  it("should not output a customData.contents key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"contents": expect.anything()}));
  });


  it("should output a customData.searchString key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {searchString: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"search_string": "test"}));
  });
  it("should not output a customData.searchString key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"search_string": expect.anything()}));
  });
});

describe("extractFbqProps StartTrial", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Search",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });

  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });

  it("should output a customData.predictedLtv key", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {predictedLtv: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"predicted_ltv": "test"}));
  });
  it("should not output a customData.predictedLtv key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "StartTrial",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"predicted_ltv": expect.anything()}));
  });
});

describe("extractFbqProps SubmitApplication", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "SubmitApplication",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "SubmitApplication",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "SubmitApplication",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "SubmitApplication",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "SubmitApplication",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "SubmitApplication",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "SubmitApplication",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "SubmitApplication",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });
});

describe("extractFbqProps Subscribe", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });

  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });

  it("should output a customData.predictedLtv key", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {predictedLtv: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"predicted_ltv": "test"}));
  });
  it("should not output a customData.predictedLtv key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "Subscribe",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"predicted_ltv": expect.anything()}));
  });
});

describe("extractFbqProps ViewContent", () => {
  it("should output a customData.contentName key", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {contentName: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_name": "test"}));
  });
  it("should not output a customData.contentName key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_name": expect.anything()}));
  });

  it("should output a customData.orderId key", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {orderId: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"order_id": "test"}));
  });
  it("should not output a customData.orderId key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"order_id": expect.anything()}));
  });

  it("should output a customData.value key", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {value: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"value": "test"}));
  });
  it("should not output a customData.value key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"value": expect.anything()}));
  });

  it("should output a customData.deliveryCategory key", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {deliveryCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"delivery_category": "test"}));
  });
  it("should not output a customData.deliveryCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"delivery_category": expect.anything()}));
  });

  it("should output a customData.contentCategory key", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {contentCategory: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_category": "test"}));
  });
  it("should not output a customData.contentCategory key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_category": expect.anything()}));
  });

  it("should output a customData.currency key", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {currency: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"currency": "test"}));
  });
  it("should not output a customData.currency key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"currency": expect.anything()}));
  });

  it("should output a customData.contentIds key", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {contentIds: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_ids": "test"}));
  });
  it("should not output a customData.contentIds key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_ids": expect.anything()}));
  });


  it("should output a customData.contents key", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {contents: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"contents": "test"}));
  });
  it("should not output a customData.contents key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"contents": expect.anything()}));
  });

  it("should output a customData.contentType key", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {contentType: "test"},
    });
    expect(result).toEqual(expect.objectContaining({"content_type": "test"}));
  });
  it("should not output a customData.contentType key if it is undefined", async() => {
    let result = extractFbqProps({
      eventName: "ViewContent",
      customData: {},
    });
    expect(result).not.toEqual(expect.objectContaining({"content_type": expect.anything()}));
  });
});

