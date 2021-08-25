const extractFbqProps = require("../extractFbqProps/index.js");
const waitForPixelInit = require("../waitForPixelInit/index.js");

module.exports = async function sendBrowserEvent(data){
  let objectData = extractFbqProps(data);

  await waitForPixelInit(data.pixelId).then(() => {
    fbq("trackSingle", data.pixelId, data.eventName, objectData, {eventID: data.eventId});
  });
};
