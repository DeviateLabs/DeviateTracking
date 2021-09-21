const createUserDataObject = require("../../createUserDataObject");
const log = require("../../log");

module.exports = function initPixel(data){
  log("Initializing pixel id", data.pixelId, "extern_id", data.userData.externalId );
  fbq("init", data.pixelId, {"extern_id": data.userData.externalId, ...createUserDataObject(data)});
};

