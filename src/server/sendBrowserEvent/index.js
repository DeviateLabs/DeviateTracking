const extractFbqProps = require("../extractFbqProps/index.js");
const waitForPixelInit = require("../waitForPixelInit/index.js");
const log = require("../log/index.js");
module.exports = async function sendBrowserEvent(data){
  let objectData = extractFbqProps(data);
  log("Sending browser event objectData", objectData, "eventId", data.eventId);

  await waitForPixelInit(data.pixelId).then(() => {
    fbq("trackSingle", data.pixelId, data.eventName, objectData, {eventID: data.eventId});
  });
};
