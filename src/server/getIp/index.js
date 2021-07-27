module.exports = async function getIp(){
  return new Promise((resolve, reject) => {
    if (window.ip){ //someone already fetched the ip so just return it
      resolve(window.ip);
    } else if (!window.fetchingIp){ //we are the first thread to need the ip, so fetch it
      window.fetchingIp = true;
      fetch("https://api.ipify.org/?format=json")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          window.ip = data.ip;
          resolve(window.ip);
        });
    } else { //someone else is busy fetching the ip, so wait for them
      const interval = setInterval(function() {
        if (window.ip) {
          clearInterval(interval);
          resolve(window.ip);
        }
      }, 200);
    }
  });
};
