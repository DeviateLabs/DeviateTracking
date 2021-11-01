const getIp = require("../getIp/index.js");
const convertFalsies = require("../convertFalsies/index.js");
const uuidv4 = require("../uuidv4/index.js");
const setFbCookies = require("../setFbCookies/index.js");

module.exports = async function processData(data){
  //convert none, automatic, etc to null
  convertFalsies(data);

  //set ua
  if (!data.userData){
    data.userData = {};
  }

  data.userData.userAgent = window.navigator.userAgent;
  data.eventSourceUrl = window.location.href;

  setFbCookies(data);

  //set ip
  await getIp();
  if (data.sendIpAddress){
    data.userData.ipAddress = window.ip;
  }

  //set exid if user didn't override it
  if (!data.userData.externalId){
    data.userData.externalId = window.navigator.userAgent + window.ip;
  }

  //generate an event id if user didn't give one
  if (!data.eventId){
    data.eventId = uuidv4();
  }
};
