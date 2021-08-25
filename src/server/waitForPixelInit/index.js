const pixelIsInitialized = require("../pixelIsInitialized/index");

module.exports = async function waitForPixelInit(pixelId){
  return new Promise((resolve, reject) => {
    if (pixelIsInitialized(pixelId)){
      resolve(true);
    } else {
      let handle = setInterval(() => {
        if (pixelIsInitialized(pixelId)){
          clearInterval(handle);
          resolve(true);
        };
      }, 100);
    };
  });
};
