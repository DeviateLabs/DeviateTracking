const createUserDataObject = require("../../createUserDataObject");

module.exports = function initPixel(data){
  console.log("Initializing pixel", data.pixelId);
  fbq("init", data.pixelId, {"extern_id": data.userData.externalId, ...createUserDataObject(data)});
};

