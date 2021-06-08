/*eslint-disable prefer-template */
/*eslint-disable complexity */
/*eslint-disable no-shadow */
//permissions and Required Components
const log = require("logToConsole");
const sendPixel = require("sendPixel");
const JSON = require("JSON");
const getTimestamp = require("getTimestampMillis");
const encodeUriComponent = require("encodeUriComponent");
const getUrl = require("getUrl");
var copyFromWindow = require("copyFromWindow");
var setInWindow = require("setInWindow");
const injectScript = require("injectScript");
const Math = require("Math");
const getCookieValues = require("getCookieValues");
const sha256 = require("sha256");


injectScript("https://deviatetracking.com/wp-content/deviatetracking/deviatetracking4.0.js?ver=" + (Math.round(getTimestamp() / 1000)), () => {
  const fireDeviateTracking = copyFromWindow("fireDeviateTracking");
  data.fbc = getCookieValues("_fbc") || null;
  fireDeviateTracking(data);
}, (e) => {
  log("ERROR");
  log(e);
  data.gtmOnFailure();
});

