module.exports = async function waitForBaseCode(){
  return new Promise((resolve, reject) => {
    if (typeof fbq === "function"){
      resolve(true);
    } else {
      let handle = setInterval(() => {
        if (typeof fbq === "function"){
          clearInterval(handle);
          resolve(true);
        }
      }, 100);
    }
  });
};
