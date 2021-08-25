module.exports = function pixelIsInitialized(pixelId){
  if (typeof fbq !== "undefined"){
    if (fbq && fbq?.getState){
      return fbq.getState().pixels.filter((value) => {
        console.log(pixelId);
        return value.id === pixelId;
      }).length >= 1;
    }
  }
  return false;
};
