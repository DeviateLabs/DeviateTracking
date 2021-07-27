const createUserDataObject = require("../createUserDataObject");

module.exports = function initPixel(data){
  fbq("init", data.pixelId, {"extern_id": data.userData.externalId, ...createUserDataObject(data)});
};
