const extractFbqProps = require("../extractFbqProps/index.js");

module.exports = function sendBrowserEvent(data){
  let objectData = extractFbqProps(data);
  fbq("track", data.eventName, objectData, {eventID: data.eventId});
};
