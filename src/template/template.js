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


injectScript("https://deviatetracking.com/wp-content/deviatetracking/deviatetracking4.0.0.js?ver=" + (Math.round(getTimestamp() / 1000)), () => {
  const fireDeviateTracking = copyFromWindow("fireDeviateTracking");
  data.fbc = getCookieValues("_fbc") || null;
  fireDeviateTracking(data);
}, (e) => {
  log("ERROR");
  log(e);
  data.gtmOnFailure();
});

