const getIp = require("../getIp/index.js");
const convertDefaults = require("../convertDefaults/index.js");
const uuidv4 = require("../uuidv4/index.js");

module.exports = async function processData(data){
  //convert none, automatic, etc to null
  convertDefaults(data);

  //set ua
  if (!data.userData){
    data.userData = {};
  }

  data.userData.userAgent = window.navigator.userAgent;
  data.eventSourceUrl = window.location.href;

  //set exid if user didn't override it
  if (!data.userData.externalId){
    data.userData.externalId = window.navigator.userAgent + await getIp();
  }

  //generate an event id if user didn't give one
  if (!data.eventId){
    data.eventId = uuidv4();
  }
};
