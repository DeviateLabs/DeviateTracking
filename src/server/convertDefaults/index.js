module.exports = function convertDefaults(data){
  //convert gtm default values to null
  for (const [key, value] of Object.entries(data)){
    if ((value === "None") || (value === "Automatic") || (value === "EventId")){
      data[key] = null;
    }
  }
  for (const [key, value] of Object.entries(data.userData)){
    if ((value === "None") || (value === "Automatic") || (value === "EventId")){
      data.userData[key] = null;
    }
  }
  for (const [key, value] of Object.entries(data.customData)){
    if ((value === "None") || (value === "Automatic") || (value === "EventId")){
      data.customData[key] = null;
    }
  }
};
