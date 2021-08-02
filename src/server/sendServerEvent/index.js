const config = require("../config.js");
module.exports = function sendServerEvent(data){
  let url = config.capiUrl.replace("{{DATA}}", encodeURIComponent(JSON.stringify(data)));
  fetch(url);
};
