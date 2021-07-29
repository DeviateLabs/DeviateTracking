const fireDeviateTracking = require("./fireDeviateTracking/index.js");
const config = require("./config.js");

console.log(`Loaded deviatetracking.js v${config.version}`);

window.fireDeviateTracking = fireDeviateTracking;
