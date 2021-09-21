const fireDeviateTracking = require("./fireDeviateTracking/index.js");
const config = require("./config.js");
const log = require("./log/index.js");
log(`Loaded deviatetracking.js v${config.version}`);

window.fireDeviateTracking = fireDeviateTracking;
