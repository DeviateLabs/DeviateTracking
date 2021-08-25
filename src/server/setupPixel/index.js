const injectBaseCode = require("./injectBaseCode/index.js");
const initPixel = require("./initPixel/index.js");
const pixelIsInitialized = require("../pixelIsInitialized/index.js");
const waitForPixelInit = require("../waitForPixelInit/index.js");
const waitForBaseCode = require("../waitForBaseCode/index.js");

module.exports = async function setupPixel(data){
  //inject base code if necessary
  if (data.injectBaseCode && typeof fbq !== "function"){ //we need to inject base and it's not  not injected
    injectBaseCode();
  } else if (typeof fbq !== "function"){ //someone else will inject, but they haven't done it yet
    console.log("Wait for base code");
    await waitForBaseCode();
  }

  if (data.initializePixel && !pixelIsInitialized(data.pixelId)){ //we need to init and it hasn't been done yet
    initPixel(data);
  } else if (!pixelIsInitialized(data.pixelId)){ //someone else will init, but they haven't yet
    waitForPixelInit(data.pixelId);
  }
};
