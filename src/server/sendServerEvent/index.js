const config = require("../config.js");
const log = require("../log/index.js");
module.exports = function sendServerEvent(data){
  log("Sending server event", data);
  let url = config.capiUrl.replace("{{DATA}}", encodeURIComponent(JSON.stringify(data)));
  fetch(url);
};
