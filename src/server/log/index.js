module.exports = function log() {
  if (typeof window !== "undefined" && window.location.href.includes("dtdebug")){
    console.log(...arguments);
  }
};
