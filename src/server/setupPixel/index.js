const injectPixel = require("../injectPixel/index.js");
const initPixel = require("../initPixel/index.js");

module.exports = function setupPixel(data){
  if (typeof fbq !== "function"){
    injectPixel();
    initPixel(data);
    console.log("Deviate Tracking pixel injected");
  }
};
