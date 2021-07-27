module.exports = function sendServerEvent(data){
  let url = `${"https://v5.api.deviatetracking.com/capi?data="}${encodeURIComponent(JSON.stringify(data))}`;
  fetch(url);
};
