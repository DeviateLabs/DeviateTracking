const processData = require("../processData/index.js");
const setupPixel = require("../setupPixel/index.js");
const sendServerEvent = require("../sendServerEvent/index.js");
const sendBrowserEvent = require("../sendBrowserEvent/index.js");
const hashData = require("../hashData/index.js");


module.exports = async function fireDeviateTracking(data){
  //do nothing if we're running inside a malware scan
  if (window.location.href.includes("appspot.com")){
    return;
  }

  await processData(data);

  //send event to the deviatetracking capi server
  if (data.sendServerEvent){
    sendServerEvent(data);
  }

  //inject and init pixel if necessary
  await setupPixel(data);

  //send event directly to facebook
  if (data.sendBrowserEvent){
    await hashData(data);
    sendBrowserEvent(data);
  }
};
