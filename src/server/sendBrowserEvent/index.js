const extractFbqProps = require("../extractFbqProps/index.js");

module.exports = function sendBrowserEvent(data){
  let objectData = extractFbqProps(data);
  console.log("Fbq object data", JSON.parse(JSON.stringify(objectData)));
  fbq("track", data.eventName, objectData, {eventID: data.eventId});
};
