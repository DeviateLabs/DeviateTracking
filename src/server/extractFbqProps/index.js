const createUserDataObject = require("../createUserDataObject/index.js");
//eslint-disable-next-line complexity
module.exports = function extractFbqProps(data){
  let props = {};
  if (data.eventName === "AddPaymentInfo"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.contentCategory && {"content_category": data.customData.contentCategory},
      ...data?.customData?.contentIds && {"content_ids": data.customData.contentIds},
      ...data?.customData?.contents && {"contents": data.customData.contents},
      ...data?.customData?.currency && {"currency": data.customData.currency},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
    };
  } else if (data.eventName === "AddToWishlist"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
      ...data?.customData?.contentCategory && {"content_category": data.customData.contentCategory},
      ...data?.customData?.currency && {"currency": data.customData.currency},
      ...data?.customData?.contentIds && {"content_ids": data.customData.contentIds},
      ...data?.customData?.contents && {"contents": data.customData.contents},
    };
  } else if (data.eventName === "CompleteRegistration"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
      ...data?.customData?.currency && {"currency": data.customData.currency},
      ...data?.customData?.status && {"status": data.customData.status},
    };
  } else if (data.eventName === "Contact"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
    };
  } else if (data.eventName === "CustomizeProduct"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
    };
  } else if (data.eventName === "Donate"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
    };
  } else if (data.eventName === "FindLocation"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
    };
  } else if (data.eventName === "InitiateCheckout"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
      ...data?.customData?.contentCategory && {"content_category": data.customData.contentCategory},
      ...data?.customData?.currency && {"currency": data.customData.currency},
      ...data?.customData?.contentIds && {"content_ids": data.customData.contentIds},
      ...data?.customData?.contents && {"contents": data.customData.contents},
      ...data?.customData?.numItems && {"num_items": data.customData.numItems},
    };
  } else if (data.eventName === "Lead"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
      ...data?.customData?.contentCategory && {"content_category": data.customData.contentCategory},
      ...data?.customData?.currency && {"currency": data.customData.currency},
    };
  } else if (data.eventName === "PageView"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
    };
  } else if (data.eventName === "Purchase"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
      ...data?.customData?.currency && {"currency": data.customData.currency},
      ...data?.customData?.contentIds && {"content_ids": data.customData.contentIds},
      ...data?.customData?.contents && {"contents": data.customData.contents},
      ...data?.customData?.numItems && {"num_items": data.customData.numItems},
      ...data?.customData?.contentType && {"content_type": data.customData.contentType},
    };
  } else if (data.eventName === "Schedule"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
    };
  } else if (data.eventName === "Search"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
      ...data?.customData?.contentCategory && {"content_category": data.customData.contentCategory},
      ...data?.customData?.currency && {"currency": data.customData.currency},
      ...data?.customData?.contentIds && {"content_ids": data.customData.contentIds},
      ...data?.customData?.contents && {"contents": data.customData.contents},
      ...data?.customData?.searchString && {"search_string": data.customData.searchString},
    };
  } else if (data.eventName === "StartTrial"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
      ...data?.customData?.currency && {"currency": data.customData.currency},
      ...data?.customData?.predictedLtv && {"predicted_ltv": data.customData.predictedLtv},
    };
  } else if (data.eventName === "SubmitApplication"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
    };
  } else if (data.eventName === "Subscribe"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
      ...data?.customData?.currency && {"currency": data.customData.currency},
      ...data?.customData?.predictedLtv && {"predicted_ltv": data.customData.predictedLtv},
    };
  } else if (data.eventName === "ViewContent"){
    props = {
      ...data?.customData?.contentName && {"content_name": data.customData.contentName},
      ...data?.customData?.orderId && {"order_id": data.customData.orderId},
      ...data?.customData?.value && {"value": data.customData.value},
      ...data?.customData?.deliveryCategory && {"delivery_category": data.customData.deliveryCategory},
      ...data?.customData?.contentCategory && {"content_category": data.customData.contentCategory},
      ...data?.customData?.currency && {"currency": data.customData.currency},
      ...data?.customData?.contentIds && {"content_ids": data.customData.contentIds},
      ...data?.customData?.contents && {"contents": data.customData.contents},
      ...data?.customData?.contentType && {"content_type": data.customData.contentType},
    };
  }

  objectData = {
    ...props,
    ...createUserDataObject(data),
  };

  return objectData;
};
