const getIp = require("../getIp/index.js");
const convertCheckboxDefaults = require("../convertCheckboxDefaults/index.js");
const convertFalsies = require("../convertFalsies/index.js");
const uuidv4 = require("../uuidv4/index.js");
const setFbCookies = require("../setFbCookies/index.js");
const getQueryArg = require("../getQueryArg/index.js");
const log = require("../log/index.js");
const config = require("../config.js");

module.exports = async function processData(data){
  //convert undefined variables to their default values (gtm workaround)
  convertCheckboxDefaults();

  //convert none, automatic, etc to null
  convertFalsies(data);

  //set ua
  if (!data.userData){
    data.userData = {};
  }

  data.userData.userAgent = window.navigator.userAgent;
  data.eventSourceUrl = window.location.href;

  setFbCookies(data);

  //set test code, if there's one in the query arg
  let testCode = getQueryArg("dtTestCode");
  if (testCode){
    log("Overrode test code:", data.testCode, "->", testCode)
    data.testCode = testCode
  }

  //set ip
  await getIp();
  if (data.sendIpAddress){
    data.userData.ipAddress = window.ip;
    log("Set IP", data.userData.ipAddress)
  }

  //set exid if user didn't override it
  if (!data.userData.externalId){
    data.userData.externalId = window.navigator.userAgent + window.ip;
    log("Set externalId", data.userData.externalId)
  }

  //generate an event id if user didn't give one
  if (!data.eventId){
    data.eventId = uuidv4();
    log("Set event id", data.eventId)
  }

  //add the script version
  data.scriptVersion = config.version
};
