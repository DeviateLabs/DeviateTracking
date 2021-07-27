/*eslint-disable prefer-template */
/*eslint-disable complexity */
/*eslint-disable no-shadow */
//permissions and Required Components
const log = require("logToConsole");
const getTimestamp = require("getTimestampMillis");
var copyFromWindow = require("copyFromWindow");
const injectScript = require("injectScript");
const Math = require("Math");
const getCookieValues = require("getCookieValues");


let formattedData = {
  pixelId: data.pixelId,
  fbToken: data.FBToken,
  dtKey: data.apiAccessToken,
  dtEmail: data.LicensedEmail,
  eventName: data.StandardEvents,
  testCode: data.TestEventLabel,
  sendServerEvent: data.sendServerEvent,
  sendBrowserEvent: data.sendBrowserEvent,
  customData: {
    eventId: data.DeduplicationEventID,
    contentCategory: data.content_category,
    contentIds: data.content_ids,
    contentName: data.content_name,
    contentType: data.content_type,
    contents: data.contents,
    currency: data.currency,
    numItems: data.num_items,
    predictedLtv: data.predicted_ltv,
    searchString: data.search_string,
    status: data.status,
    value: data.value,
    orderId: data.order_id,
    deliveryCategory: data.delivery_category,
  },
  userData: {
    email: data.email,
    phone: data.phone,
    gender: data.gender,
    dateOfBirth: data.dateOfBirth,
    firstName: data.firstName,
    lastName: data.lastName,
    city: data.city,
    state: data.state,
    zip: data.zip,
    country: data.country,
    externalId: data.externalId,
    subscriptionId: data.subscriptionId,
    fbLoginId: data.fbLoginId,
  },
};

injectScript("https://deviatetracking.com/wp-content/deviatetracking/deviatetracking-5.0.1.js?ver=" + (Math.round(getTimestamp() / 1000)), () => {
  const fireDeviateTracking = copyFromWindow("fireDeviateTracking");
  fireDeviateTracking(formattedData);
  data.gtmOnSuccess();
}, (e) => {
  log("ERROR");
  log(e);
  data.gtmOnFailure();
});
