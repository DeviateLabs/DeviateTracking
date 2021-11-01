//convert undefined checkbox keys to their default values
//workaround for a gtm bug where a default-true checkbox can initially show up as ticked, but be treated as undefined
module.exports = function convertCheckboxDefaults(data){
  if (!data){
    return;
  }

  let pairs = [
    {
      key: "initializePixel",
      value: true
    },
    {
      key: "injectBaseCode",
      value: true
    },
    {
      key: "sendBrowserEvent",
      value: true
    },
    {
      key: "sendServerEvent",
      value: true
    }
  ]
  
  for(const pair of pairs){
    if (data[pair.key] === undefined){ //yes, this should be undefined ONLY, and not count other falsy values
      data[pair.key] = pair.value;
      console.log("Converted ", pair.key, data[pair.key], "->", pair.value)
    }
  }
};
